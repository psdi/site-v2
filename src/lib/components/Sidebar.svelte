<script>
  import { onMount } from "svelte";

  onMount(() => {
    let nav = document.getElementById('menu');
    let offset = nav.offsetHeight;
    window.onscroll = function() {
      // console.log(window.scrollY, offset);
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
  }
  header {
    flex: 0 0 auto;
    width: 15rem;

    //$dark-green: #152614;
    //$light-green: #DEF4C6;
  
    div.wrapper {
      height: 15rem;
      background-color: var(--dark-green);
      padding-top: 2.5rem;
      h1 {
        text-align: center;
        letter-spacing: 0.05em;
        margin-bottom: 3rem;
        color: white;
        //text-shadow: 2px 2px 0 #A4969B;
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
    /*z-index: 100;*/
  }
</style>