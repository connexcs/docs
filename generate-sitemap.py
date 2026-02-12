#!/usr/bin/env python3
"""
Generate a github-sitemap.xml for all .md files in the repository.

The sitemap indexes uncompiled Markdown documents with links to their
GitHub blob URLs, e.g.:
  https://github.com/connexcs/docs/blob/master/docs/apps/components/group.md

The resulting github-sitemap.xml is placed in the repo root so it can
be accessed via GitHub raw:
  https://raw.githubusercontent.com/connexcs/docs/master/github-sitemap.xml
"""

import os
import datetime
import subprocess
import xml.etree.ElementTree as ET
from xml.dom import minidom

REPO_OWNER = "connexcs"
REPO_NAME = "docs"
BRANCH = "master"
BASE_URL = f"https://raw.githubusercontent.com/{REPO_OWNER}/{REPO_NAME}/refs/heads/{BRANCH}"

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FILE = os.path.join(SCRIPT_DIR, "github-sitemap.xml")
HTML_OUTPUT_FILE = os.path.join(SCRIPT_DIR, "github-sitemap.html")


def get_md_files(root_dir):
    """Walk the repo and collect all .md file paths, relative to root_dir."""
    md_files = []
    for dirpath, _dirnames, filenames in os.walk(root_dir):
        for fname in filenames:
            if fname.endswith(".md"):
                full = os.path.join(dirpath, fname)
                rel = os.path.relpath(full, root_dir)
                md_files.append(rel)
    md_files.sort()
    return md_files


def get_last_modified(filepath):
    """Try to get the last git commit date for a file, fall back to mtime."""
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
    # Fallback: file modification time
    mtime = os.path.getmtime(os.path.join(SCRIPT_DIR, filepath))
    return datetime.datetime.fromtimestamp(mtime, tz=datetime.timezone.utc).strftime(
        "%Y-%m-%dT%H:%M:%S+00:00"
    )


def build_sitemap(md_files):
    """Build a sitemap XML ElementTree from a list of relative .md paths."""
    nsmap = "http://www.sitemaps.org/schemas/sitemap/0.9"
    urlset = ET.Element("urlset", xmlns=nsmap)

    for rel_path in md_files:
        url_el = ET.SubElement(urlset, "url")

        # Normalise path separators to forward-slash for URLs
        url_path = rel_path.replace(os.sep, "/")
        loc = f"{BASE_URL}/{url_path}"

        ET.SubElement(url_el, "loc").text = loc
        ET.SubElement(url_el, "lastmod").text = get_last_modified(rel_path)
        ET.SubElement(url_el, "changefreq").text = "weekly"
        ET.SubElement(url_el, "priority").text = "0.8"

    return urlset


def pretty_xml(element):
    """Return a pretty-printed XML string with declaration."""
    rough = ET.tostring(element, encoding="unicode")
    parsed = minidom.parseString(rough)
    return parsed.toprettyxml(indent="  ", encoding=None)


def build_html_index(md_files):
    """Build an HTML page with a simple list of links to each raw .md file.

    Each link's visible text is the full relative path (e.g.
    docs/anyedge/anyedge.md) so that crawlers / indexers that derive
    the item name from the link text will retain the complete path
    context.
    """
    lines = [
        "<!DOCTYPE html>",
        "<html lang=\"en\">",
        "<head>",
        "  <meta charset=\"utf-8\">",
        "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
        "  <title>ConnexCS Documentation – File Index</title>",
        "  <style>",
        "    body { font-family: system-ui, -apple-system, sans-serif;",
        "           max-width: 960px; margin: 2rem auto; padding: 0 1rem;",
        "           color: #222; }",
        "    h1   { border-bottom: 2px solid #0969da; padding-bottom: .4rem; }",
        "    ul   { list-style: none; padding: 0; }",
        "    li   { padding: .25rem 0; }",
        "    a    { color: #0969da; text-decoration: none; }",
        "    a:hover { text-decoration: underline; }",
        "    .count { color: #666; font-size: .9rem; }",
        "  </style>",
        "</head>",
        "<body>",
        "  <h1>ConnexCS Documentation – File Index</h1>",
        f"  <p class=\"count\">{len(md_files)} documents</p>",
        "  <ul>",
    ]
    for rel_path in md_files:
        url_path = rel_path.replace(os.sep, "/")
        href = f"{BASE_URL}/{url_path}"
        lines.append(f"    <li><a href=\"{href}\">{url_path}</a></li>")
    lines += [
        "  </ul>",
        "</body>",
        "</html>",
    ]
    return "\n".join(lines) + "\n"


def main():
    print(f"Scanning for .md files in: {SCRIPT_DIR}")
    md_files = get_md_files(SCRIPT_DIR)
    print(f"Found {len(md_files)} Markdown files.")

    print("Building sitemap (fetching git dates — this may take a moment)...")
    urlset = build_sitemap(md_files)
    xml_str = pretty_xml(urlset)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(xml_str)

    print(f"Sitemap written to: {OUTPUT_FILE}")

    # ── HTML index ──────────────────────────────────────────────────
    print("Building HTML index...")
    html_str = build_html_index(md_files)
    with open(HTML_OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(html_str)

    print(f"HTML index written to: {HTML_OUTPUT_FILE}")
    print(
        f"Raw URL: https://raw.githubusercontent.com/{REPO_OWNER}/{REPO_NAME}/{BRANCH}/github-sitemap.xml"
    )
    print(
        f"HTML URL: https://raw.githubusercontent.com/{REPO_OWNER}/{REPO_NAME}/{BRANCH}/github-sitemap.html"
    )


if __name__ == "__main__":
    main()
