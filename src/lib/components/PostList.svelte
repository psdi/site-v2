<script>
  import { formatDate } from "../scripts/utils";
  const { posts } = $props();
</script>

<ul>
  {#each posts as post}
    <li>
      <h3>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h3>
      posted on {formatDate(post.meta.date)}
    </li>
  {:else}
    <p>No posts available.</p>
  {/each}
</ul>

<style lang="scss">
  :root {
    --dark-grey: #3b3b3b;
    --orange: #FFAD05;
    --orange-light: #FFD685;
  }

  h3 {
    margin-bottom: 0;
  }

  ul {
    list-style: '»';
    padding: 0;

    li {
      padding-left: 0.5rem;
    }

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
        color: var(--dark-grey);
      }
    }
  }
</style>
