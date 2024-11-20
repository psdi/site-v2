<script>
  import Sidebar from '../lib/components/Sidebar.svelte';
</script>

<Sidebar />
<main>
  <slot />
</main>

<style lang="scss">
  :root {
    --dark-grey: #3b3b3b;
    --orange: #FFAD05;
    --orange-light: #FFD685;
  }

  main {
    flex-grow: 2;
    padding: 2.5em 0 5.5em 2em;
  }

  :global(a:not(.nav-link)) {
    color: var(--dark-grey);
    text-decoration: underline;
    text-decoration-color: var(--orange-light);
    text-decoration-skip-ink: none;
    text-decoration-thickness: .4rem;
    text-underline-offset: -.25rem;

    &:hover {
      text-decoration-color: var(--orange);
    }

    &:visited {
      color: var(--charcoal);
    }
  }

  @media screen and (max-width: 790px) {
    main {
      flex-grow: 0 0 auto;
      padding: 1.5rem 2rem 4rem;
    }
  }
</style>
