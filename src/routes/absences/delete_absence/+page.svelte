<script>
 export let data;
</script>

<h1>Elimina assenza</h1>
<ul>
{#each data.absences as ab}
    <li>
	<form method="POST" action="?/delete">
	    {ab.from_date.toISOString().slice(0, 10)} --> {ab.to_date.toISOString().slice(0, 10)}
	    <input type="hidden" name="absence_id" value="{ab.id}" />
	    <button>Elimina</button>
	</form>
    </li>
{/each}
</ul>

