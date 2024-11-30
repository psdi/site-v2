<script>
  import PostList from "../../../../lib/components/PostList.svelte";

  const { data } = $props();
  const { category, posts } = data;
</script>

<p>Posts for the category “{category}”:</p>

<PostList {posts}></PostList>
