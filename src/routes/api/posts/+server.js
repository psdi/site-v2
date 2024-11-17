import { json } from "@sveltejs/kit";
import { fetchMarkdownPosts } from "../../../lib/scripts/blog";

export const prerender = true;

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.data) - new Date(a.meta.date);
  })

  return json(sortedPosts);
};
