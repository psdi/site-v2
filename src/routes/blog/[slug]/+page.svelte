<script>
  import { formatDate } from '../../../lib/scripts/utils';

  const { data } = $props();
  const { title, date, Content } = data;
</script>

<article>
  <h1>{title}</h1>
  <p class="date">Published: {formatDate(date)}</p>
  <Content />
</article>

<style>
  h1 {
    font-size: 33pt;
    margin: 0.7rem 0;
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