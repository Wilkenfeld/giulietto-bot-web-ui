<script>
	import Datepicker from '$lib/Datepicker.svelte';
	import { page } from '$app/stores';

	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;
	let from = data.absences.map((a) => a.from_date.toISOString().slice(0, 10)),
		to = data.absences.map((a) => a.to_date.toISOString().slice(0, 10));

	const minDate = new Date().toISOString().slice(0, 10);
	console.log(from, to);
	const getMaxDate = (...dates) => {
		const vals = dates.map((d) => {
			return d ? new Date(d).valueOf() : 0;
		});

		const max = Math.max(...vals);
		return new Date(max).toISOString().slice(0, 10);
	};

	const getMinDate = (...dates) => {
		const vals = dates.map((d) => (d ? new Date(d).valueOf() : Infinity));
		const min = Math.min(...vals);
		console.log(min);
		return new Date(min).toISOString().slice(0, 10);
	};
</script>

<h1 class="page-title">Modifica assenza</h1>
{#if data.absences.length > 0}
	<ul>
		{#each data.absences as ab, i}
			<li>
				<form id="modify-absence-form" method="POST" action="?/modify">
					<Datepicker bind:value={from[i]} name="from" min={minDate} required />
					<Datepicker bind:value={to[i]} name="to" min={from || minDate} required />
					<input type="hidden" name="absence_id" value={ab.id} />
					<button type="submit" value="Invia">Modifica</button>
				</form>
			</li>
		{/each}
	</ul>
{:else}
	<p>Non ci sono assenze registrate</p>
{/if}
