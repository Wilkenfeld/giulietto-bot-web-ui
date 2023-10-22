<script>
 export let data;
</script>

<h1>Tutte le assenze</h1>
{#if data.absences.length > 0}
    <ul>
	{#each data.absences as ab}
	    <li>
	      <a href="https://t.me/{ab.telegram_id}">{ab.name + " " + (ab.last_name || '')}</a> {ab.from_date.toISOString().slice(0, 10)} --> {ab.to_date.toISOString().slice(0, 10)}
	    </li>
	{/each}
    </ul>
{:else}
	<p>Non ci sono assenze registrate</p>
{/if}
