<script>
 export let data;
</script>

<h1>Le mie assenze</h1>
{#if data.absences.length > 0}
    <ul>
	{#each data.absences as ab}
	    <li>
		{ab.from_date.toISOString().slice(0, 10)} --> {ab.to_date.toISOString().slice(0, 10)}
	    </li>
	{/each}
    </ul>
{:else}
	<p>Non ci sono assenze registrate</p>
{/if}
