<script>
	import Datepicker from '$lib/Datepicker.svelte';
	import { page } from '$app/stores';

	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;
	const { minDate } = data;
	let from, to;
	const userId = $page.url.searchParams.get('user_id');

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

<h1 class="page-title">Registra una nuova assenza</h1>
<form id="create-absence-form" method="POST">
	<Datepicker bind:value={from} name="from" min={minDate} label="Data di partenza" required />
	<Datepicker bind:value={to} name="to" label="Data di ritorno" min={from || minDate} required />
	<input type="hidden" name="user_id" value={userId} />
	<button type="submit" value="Invia">Invia</button>
</form>
