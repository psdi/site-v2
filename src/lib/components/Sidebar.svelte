<script>
  import { page } from '$app/stores';
  import { onMount } from "svelte";

  const pages = ['home', 'blog', 'projects', 'photos'];
  let currentUrl = $page.url.pathname.split('/').filter(Boolean).shift() || 'home';

  onMount(() => {
    let nav = document.getElementById('menu');
    let offset = nav.offsetHeight;
    window.onscroll = function() {
      if (window.matchMedia( '( max-width: 790px )' ).matches) {
        return;
      }

      if (window.scrollY > offset) {
        nav.classList.add("sticky");
      } else if (window.scrollY < offset + 90) {
        nav.classList.remove("sticky");
      }
    }
  });

  function updatePath(path) {
    if (!window.matchMedia( '( max-width: 790px )' )) return;
    currentUrl = path;
  }
</script>

<header>
  <div class="wrapper">
    <h1>
      <span>p</span><span>s</span><span>d</span><span>i</span>
    </h1>
  </div>

  <nav id="menu">
    {#each pages as page}
      <a
        href="/{page === 'home' ? '' : page}"
        class="nav-link"
        class:active="{page === currentUrl}"
        onclick={() => updatePath(page)}
      >
        {page}
      </a>
    {/each}
  </nav>
</header>

<style lang="scss">
  :root {
    --dark-green: #38564B;
    --light-green: #C6E6B2;
    --dark-grey: #3b3b3b;
  }
  header {
    flex: 0 0 auto;
    width: 12rem;

    div.wrapper {
      height: 15rem;
      background-color: var(--dark-green);
      padding-top: 2.5rem;
      h1 {
        text-align: center;
        letter-spacing: 0.05em;
        margin-bottom: 3rem;
        font-size: 65pt;
      }
    }
    nav {
      width: 100%;
      margin: 0.5rem auto 0;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      border: 1px dashed var(--dark-green);
      background-color: whitesmoke;

      > a {
        width: 100%;
        height: 1.75rem;
        font-size: 12pt;
        text-decoration: none;
        text-align: center;
        letter-spacing: 0.05rem;
        color: var(--dark-green);
        vertical-align: middle;
        line-height: 1.75rem;
        &.active {
          background-color: var(--dark-grey);
          color: white;
        }
        &:hover {
          background-color: var(--dark-green);
          color: white;
        }
      }
    }
  }

  :global(nav.sticky) {
    position: sticky;
    top: 1rem;
  }

  @media screen and (min-width: 790px) {
    h1 {
      margin-bottom: 3rem;
      font-size: 65pt;
      display: flex;
      justify-content: center;
      color: #99C24D;

      span {
        margin: 0 -8px;

        &:nth-child(1) {
          line-height: 7.75rem;
        }

        &:nth-child(2) {
          line-height: 5.7rem;
          color: whitesmoke;
        }

        &:nth-child(3) {
          line-height: 6.7rem;
          color: #F18F01;
        }

        &:nth-child(4) {
          line-height: 5rem;
        }

      }
    }
  }

  @media screen and (max-width: 790px) {
    header {
      width: 100%;
      div.wrapper {
        height: 3.5rem;
        padding: 0.5rem 2rem;
        background-color: transparent;
        h1 {
          width: fit-content;
          margin: 0;
          padding: 0.1rem 0.3rem 0.3rem;
          font-size: 28pt;
          text-align: left;
          color: #fff;
          background-color: var(--dark-green);
          span {
            font-size: inherit;
          }
        }
      }
      nav {
        margin: 0;
        padding: 0 2rem;
        flex-direction: row;
        flex-flow: wrap;
        border: none;
        background-color: transparent;

        > a {
          width: auto;
          margin-right: 0.6rem;
          font-size: 10.5pt;
          text-decoration: underline;
          color: var(--dark-grey);
          &:hover, &.active {
            background-color: transparent;
            color: var(--dark-grey);
          }
        }
      }
    }
  }
</style>
