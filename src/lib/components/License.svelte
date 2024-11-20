<script>
  const CC_BY_SA = 'cc-by-sa';
  const MIT = 'mit';
  const { type } = $props();
</script>

<p class="license">
  {#if type === CC_BY_SA}
    This post is distributed under the <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 license</a>.
  {:else if type === MIT}
    This post is distributed under the <a href="https://github.com/psdi/site-v2/blob/main/LICENSE.MIT.txt">MIT license</a>.
  {:else}
    Unless otherwise specified, all blog posts and self-made pictures are distributed with the <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 license</a>.
  {/if}
</p>

<style lang="scss">
  p.license {
    font-size: 10pt;
    a {
      font-size: inherit;
    }
  }
</style>