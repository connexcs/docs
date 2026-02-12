#!/usr/bin/env python3
"""
Build a flat "md/" folder inside the mkdocs site output for indexing.

For every .md file in the repository the script:
  1. Copies it into  site/md/  with a flattened filename (path
     separators replaced by "--").
       e.g.  docs/anyedge/anyedge.md  →  site/md/docs--anyedge--anyedge.md
  2. Generates a sitemap.xml inside  site/md/  that references every
     flattened file via its public URL on docs.connexcs.com.

Run AFTER mkdocs build (which clears the site/ directory):
    mkdocs build && python3 build-md.py
"""

import os
import shutil
import datetime
import subprocess
import xml.etree.ElementTree as ET
from xml.dom import minidom

# ── Configuration ───────────────────────────────────────────────────
SITE_URL = "https://docs.connexcs.com"

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SITE_DIR = os.path.join(SCRIPT_DIR, "site")
OUTPUT_DIR = os.path.join(SITE_DIR, "md")
SEPARATOR = "--"


# ── Helpers ─────────────────────────────────────────────────────────
def get_md_files(root_dir):
    """Collect all .md file paths relative to *root_dir*, sorted."""
    md_files = []
    for dirpath, _dirnames, filenames in os.walk(root_dir):
        # Skip the site output directory and hidden / non-doc dirs.
        rel_dir = os.path.relpath(dirpath, root_dir)
        if rel_dir == "site" or rel_dir.startswith("site" + os.sep):
            continue
        if any(part.startswith(".") for part in rel_dir.split(os.sep)):
            continue

        for fname in filenames:
            if fname.endswith(".md"):
                full = os.path.join(dirpath, fname)
                rel = os.path.relpath(full, root_dir)
                md_files.append(rel)
    md_files.sort()
    return md_files


def flat_name(rel_path):
    """Convert a relative path to a flat filename.

    Strips the leading 'docs/' prefix (all files live under docs/)
    before flattening.

    docs/anyedge/anyedge.md  →  anyedge--anyedge.md
    docs/api.md              →  api.md
    """
    # Remove leading docs/ or docs\ prefix
    stripped = rel_path
    for prefix in ("docs/", "docs" + os.sep):
        if stripped.startswith(prefix):
            stripped = stripped[len(prefix):]
            break
    return stripped.replace(os.sep, SEPARATOR).replace("/", SEPARATOR)


def get_last_modified(filepath):
    """Return ISO-8601 last-commit date for *filepath*, or fall back to mtime."""
    try:
        result = subprocess.run(
            ["git", "log", "-1", "--format=%cI", "--", filepath],
            capture_output=True,
            text=True,
            cwd=SCRIPT_DIR,
        )
        if result.returncode == 0 and result.stdout.strip():
            return result.stdout.strip()
    except FileNotFoundError:
        pass
    mtime = os.path.getmtime(os.path.join(SCRIPT_DIR, filepath))
    return datetime.datetime.fromtimestamp(mtime, tz=datetime.timezone.utc).strftime(
        "%Y-%m-%dT%H:%M:%SZ"
    )


# ── Core build ──────────────────────────────────────────────────────
def copy_flat(md_files):
    """Copy every .md file into OUTPUT_DIR with a flattened name."""
    if os.path.exists(OUTPUT_DIR):
        shutil.rmtree(OUTPUT_DIR)
    os.makedirs(OUTPUT_DIR)

    for rel_path in md_files:
        src = os.path.join(SCRIPT_DIR, rel_path)
        dst = os.path.join(OUTPUT_DIR, flat_name(rel_path))
        shutil.copy2(src, dst)


def build_sitemap(md_files):
    """Create a sitemap.xml inside OUTPUT_DIR referencing every flat file."""
    nsmap = "http://www.sitemaps.org/schemas/sitemap/0.9"
    urlset = ET.Element("urlset", xmlns=nsmap)

    for rel_path in md_files:
        fname = flat_name(rel_path)
        loc = f"{SITE_URL}/md/{fname}"

        url_el = ET.SubElement(urlset, "url")
        ET.SubElement(url_el, "loc").text = loc
        ET.SubElement(url_el, "lastmod").text = get_last_modified(rel_path)
        ET.SubElement(url_el, "changefreq").text = "weekly"
        ET.SubElement(url_el, "priority").text = "0.8"

    rough = ET.tostring(urlset, encoding="unicode")
    parsed = minidom.parseString(rough)
    return parsed.toprettyxml(indent="  ", encoding=None)


# ── Entry point ─────────────────────────────────────────────────────
def main():
    print(f"Scanning for .md files in: {SCRIPT_DIR}")
    md_files = get_md_files(SCRIPT_DIR)
    print(f"Found {len(md_files)} Markdown files.")

    print(f"Copying to flat output folder: {OUTPUT_DIR}")
    copy_flat(md_files)

    print("Generating sitemap.xml …")
    xml_str = build_sitemap(md_files)
    sitemap_path = os.path.join(OUTPUT_DIR, "sitemap.xml")
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(xml_str)

    print(f"Done – {len(md_files)} files written to {OUTPUT_DIR}/")
    print(f"Sitemap: {sitemap_path}")
    print(f"Public sitemap URL: {SITE_URL}/md/sitemap.xml")


if __name__ == "__main__":
    main()
