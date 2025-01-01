<script>
  import Sidebar from '../lib/components/Sidebar.svelte';
  let { children } = $props();
</script>

<Sidebar />

<div class="wrapper">
  <main>
    {@render children()}
  </main>

  <footer>
    <hr class="dashed" />
    <a href="/legal-notice/en" class="legal-notice">Legal notice (Impressum)</a>
  </footer>
</div>

<style lang="scss">
  :root {
    --light-grey: #E0E1E1;
    --dark-grey: #3b3b3b;
    --orange: #FFAD05;
    --orange-light: #FFD685;
  }

  div.wrapper {
    flex-grow: 2;
    padding: 2.5em 0 5.5em 2em;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  :global(a:not(.nav-link):not(.legal-notice)) {
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

  :global(hr.dashed) {
    border: 0.08rem dashed var(--light-grey);
  }

  footer {
    margin-top: 3rem;

    a.legal-notice {
      font-size: 9pt;
      color: var(--dark-grey);
      letter-spacing: 0.1rem;
      &:visited {
        color: var(--dark-grey);
      }
    }
  }

  @media screen and (max-width: 790px) {
    div.wrapper {
      flex-grow: 0 0 auto;
      padding: 1.5rem 2rem 4rem;
    }
  }
</style>
