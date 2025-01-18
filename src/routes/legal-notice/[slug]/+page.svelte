<svelte:head>
  <meta name="robots" content="noindex">
</svelte:head>

<script>
  let { data } = $props();
</script>

<h3>{data.text.title}</h3>

{@html data.text.content}
