<script>
  import Datepicker from "$lib/Datepicker.svelte";
  import { page } from '$app/stores';
  let minDate = (new Date()).toISOString().slice(0, 10);
  let from;
  const userId = $page.url.searchParams.get('user_id')
</script>

<!--link rel="stylesheet" href="../../styles/form.css"></link-->
<h1 class="page-title">Registra una nuova assenza</h1>
<form id="create-absence-form" method="POST" action="/absences/">
  <Datepicker bind:value="{from}" name="from" min="{minDate}" label="Data di partenza"/>
  <Datepicker name="to" label="Data di ritorno" required />
  <input type="hidden" name="user_id" value="{userId}" />
  <input type="submit" value="Invia" />
</form>


