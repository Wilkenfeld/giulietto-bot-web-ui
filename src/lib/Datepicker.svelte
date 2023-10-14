<script>
  export let label = "Date";
  export let id;
  export let name = "datepicker";
  export let required = true;
  export let value;
  export let min;
</script>
<div class="container">
  <label for="{name}">
    {label}
  </label>
  <input {id} {min} {name} {value} type="date" {required}/>
</div>
<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
