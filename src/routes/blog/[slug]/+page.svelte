<script>
  import License from '../../../lib/components/License.svelte';
  import { formatDate } from '../../../lib/scripts/utils';
  import 'prismjs/themes/prism.min.css';

  const { data } = $props();
  const { title, date, Content } = data;
</script>

<article>
  <h1>{title}</h1>
  <p class="date">posted on {formatDate(date)}</p>
  <Content />
</article>

<License />

<style>
  h1 {
    font-size: 33pt;
    margin: 0.7rem 0;
  }

  article {
    margin-bottom: 3rem;
  }

  p.date {
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 790px) {
    h1 {
      font-size: 20pt;
    }
  }
</style>