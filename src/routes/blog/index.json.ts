import { getPosts } from './_posts.js';

const contents = JSON.stringify(getPosts().map(post => {
  return {
    slug: post.slug,
    title: post.title,
    pubdate: post.pubdate,
  };
}));

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(contents);
}
