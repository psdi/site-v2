<script>
  import PostList from '../../lib/components/PostList.svelte';
  const { data } = $props();
</script>

<section class="heading">
  <h2>Blog</h2>
  <p>A dedicated space for updates on dev projects and… anything and everything else</p>
</section>

<PostList posts={data.posts} />

<style>
  section.heading {
    margin-bottom: 2rem;
  }
</style>
