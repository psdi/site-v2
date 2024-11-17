<script>
  import { formatDate } from '../../lib/scripts/utils';
  const { data } = $props();
</script>

<section class="heading">
  <h2>Blog</h2>
  <p>A dedicated space for updates on dev projects and… anything and everything else</p>
</section>

<section>
  <ul>
    {#each data.posts as post}
      <li>
        <h3>
          <a href={post.path}>
            {post.meta.title}
          </a>
        </h3>
        Published {formatDate(post.meta.date)}
      </li>
    {/each}
  </ul>
</section>

<style>
:root {
  --dark-grey: #3b3b3b;
  --orange: #FFAD05;
  --orange-light: #FFD685;
}

section.heading {
  margin-bottom: 2rem;
}

ul {
  list-style: none;
  padding: 0;

  a {
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
}
</style>