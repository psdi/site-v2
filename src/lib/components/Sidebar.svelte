<script>
  import { onMount } from "svelte";

  onMount(() => {
    let nav = document.getElementById('menu');
    let offset = nav.offsetHeight;
    window.onscroll = function() {
      if (window.matchMedia( '( max-width: 790px )' )) {
        return;
      }

      if (window.scrollY > offset) {
        nav.classList.add("sticky");
      } else if (window.scrollY < offset + 90) {
        nav.classList.remove("sticky");
      }
    }
  });
</script>

<header>
  <div class="wrapper">
    <h1>psdi</h1>
  </div>

  <nav id="menu">
    <a href="/">home</a>
    <a href="/blog">blog</a>
    <a href="/">projects (todo)</a>
    <a href="/">photos (todo)</a>
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
    width: 15rem;

    div.wrapper {
      height: 15rem;
      background-color: var(--dark-green);
      padding-top: 2.5rem;
      h1 {
        text-align: center;
        letter-spacing: 0.05em;
        margin-bottom: 3rem;
        color: white;
        font-size: 50pt;
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

  @media screen and (max-width: 790px) {
    header {
      width: 100%;
      div.wrapper {
        height: 3.5rem;
        padding: 0.5rem 2rem;
        background-color: transparent;
        h1 {
          margin: 0;
          font-size: 28pt;
          text-align: left;
          color: var(--dark-green);
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
          &:hover {
            background-color: transparent;
            color: var(--dark-grey);
          }
        }
      }
    }
  }
</style>
