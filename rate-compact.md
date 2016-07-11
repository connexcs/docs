#Rate Compact

<p>When merging multiple rate cards together the rate compact is the strategy with which unique prefixes are merged. These are Minimum, Maximum and Average. When a collision between two codes happens this rule will govern how the combined rate will be calculated.</p>

<h2><strong>Example</strong></h2>
<table class="table"><thead><tr><th>Prefix</th>
<th>Destination</th>
<th>Cost</th>
</tr></thead><tbody><tr><td><strong>Provider Rate Card A</strong></td>
<td> </td>
<td> </td>
</tr><tr><td>441</td>
<td>UK Landline</td>
<td>0.01</td>
</tr><tr><td>442</td>
<td>UK Landline</td>
<td>0.01</td>
</tr><tr><td><strong>Provider Rate Card B</strong></td>
<td> </td>
<td> </td>
</tr><tr><td>441</td>
<td>UK Landline</td>
<td>0.0075</td>
</tr><tr><td>442</td>
<td>UK Landline</td>
<td>0.0075</td>
</tr><tr><td><strong>Provider Rate Card C</strong></td>
<td> </td>
<td> </td>
</tr><tr><td>441</td>
<td>UK Landline</td>
<td>0.02</td>
</tr><tr><td>442</td>
<td>UK Landline</td>
<td>0.02</td>
</tr></tbody></table><h2><strong>Outputs</strong></h2>
<p>If we merged all 3 of the above cards, each with a different Rate Compact, we would end up with the following different rate cards.</p>
<h2><strong>Minimum</strong></h2>
<table class="table"><thead><tr><th>Prefix</th>
<th>Destination</th>
<th>Cost</th>
</tr></thead><tbody><tr><td>441</td>
<td>UK Landline</td>
<td>0.0075</td>
</tr><tr><td>442</td>
<td>UK Landline</td>
<td>0.0075</td>
</tr></tbody></table><h2><strong>Maximum</strong></h2>
<table class="table"><thead><tr><th>Prefix</th>
<th>Destination</th>
<th>Cost</th>
</tr></thead><tbody><tr><td>441</td>
<td>UK Landline</td>
<td>0.02</td>
</tr><tr><td>442</td>
<td>UK Landline</td>
<td>0.02</td>
</tr></tbody></table><h2><strong>Average</strong></h2>
<table class="table"><thead><tr><th>Prefix</th>
<th>Destination</th>
<th>Cost</th>
</tr></thead><tbody><tr><td>441</td>
<td>UK Landline</td>
<td>0.0125</td>
</tr><tr><td>442</td>
<td>UK Landline</td>
<td>0.0125</td></tr></tbody></table>
