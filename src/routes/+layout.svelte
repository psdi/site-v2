<script>
  import Sidebar from '../lib/components/Sidebar.svelte';
</script>

<Sidebar />
<main>
  <slot />
</main>

<style lang="scss">
  main {
    flex-grow: 2;
    padding: 2.5em 0 5.5em 2em;
  }

  @media screen and (max-width: 790px) {
    main {
      flex-grow: 0 0 auto;
      padding: 1.5rem 2rem 4rem;
    }
  }
</style>
