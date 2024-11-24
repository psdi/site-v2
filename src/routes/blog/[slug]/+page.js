export async function load({ params }) {
  const post = await import(`$lib/posts/${params.slug}.md`);
  const { title, date, author, categories } = post.metadata;
  const Content = post.default;

  return {
    Content,
    title,
    date,
    categories
  };
}
