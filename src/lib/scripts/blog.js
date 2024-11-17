export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/lib/posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);
  
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = '/blog' + path.slice(14, -3);
      //const postPath = '/blog' + /\/src\/lib\/posts(\/.+)\.md/g.exec(path)[1];

      return {
        meta: metadata,
        path: postPath
      };
    })
  );

  return allPosts;
};
