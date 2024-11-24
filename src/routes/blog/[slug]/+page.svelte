<script>
  import License from '../../../lib/components/License.svelte';
  import { formatDate } from '../../../lib/scripts/utils';
  import 'prismjs/themes/prism.min.css';

  const { data } = $props();
  const { title, date, Content, categories } = data;
</script>

<article>
  <h1>{title}</h1>
  <p class="date">posted on {formatDate(date)}</p>
  <section class="tags">
    <h5>tags:</h5>
    {#each categories as category}
      <a href="/blog/category/{category}" class="category">{category}</a>
    {/each}
  </section>

  <Content />
</article>

<License />

<style style="scss">
  :root {
    --green-dark: #8CB63E;
    --green-light: #C2DB95;
  }
  h1 {
    font-size: 33pt;
    margin: 0.7rem 0;
  }

  article {
    margin-bottom: 3rem;
  }

  section.tags {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    h5 {
      margin: 0 0.5rem 0 0;
      font-size: 12pt;
      font-variant: small-caps;
      font-weight: 100;
    }
  }

  a.category {
    display: inline-block;
    box-sizing: border-box;
    margin-right: 0.3rem;
    text-decoration-color: var(--green-light);

    &:hover {
      text-decoration-color: var(--green-dark);
    }
  }

  @media screen and (max-width: 790px) {
    h1 {
      font-size: 20pt;
    }
  }
</style>