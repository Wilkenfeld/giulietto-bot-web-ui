<script>
  import Datepicker from "$lib/Datepicker.svelte";
  let minDate = (new Date()).toISOString().slice(0, 10);
  let from;
  </script>
<svelte:head>
</svelte:head>
<!--link rel="stylesheet" href="../../styles/form.css"></link-->
<h1 class="page-title">Registra una nuova assenza</h1>
<form id="create-absence-form" method="POST" action="/absences/">
  <Datepicker bind:value="{from}" name="from" min="{minDate}" label="Data di partenza"/>
  <Datepicker name="to" label="Data di ritorno" required />
  <input type="submit" value="Invia" />
</form>


