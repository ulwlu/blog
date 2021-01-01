import fs from 'fs';
import path from 'path';
import marked from 'marked';

export function getPosts () {
  const slugs = fs.readdirSync('posts')
    .filter(file => path.extname(file) === '.md')
    .map(file => file.slice(0, -3));
  return slugs.map(getPost).sort((a, b) => {
    return a.pubdate < b.pubdate ? 1 : -1;
  });
}

export function getPost(slug: string) {
  const file = `posts/${slug}.md`;
  if (!fs.existsSync(file)) return null;
  const markdown = fs.readFileSync(file, 'utf-8');
  const { content, metadata } = process_markdown(markdown);
  const title = metadata.title;
  const pubdate = new Date(`${metadata.pubdate} EDT`).toDateString();
  const html = marked(content);
  return {
    slug,
    title,
    pubdate,
    html
  };
}

function process_markdown(markdown: string) {
  const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
  const frontMatter = match[1];
  const content = markdown.slice(match[0].length);
  const metadata = {} as { title: string, pubdate: string };
  frontMatter.split('\n').forEach(pair => {
    const colonIndex = pair.indexOf(':');
    metadata[pair.slice(0, colonIndex).trim()] = pair
      .slice(colonIndex + 1)
      .trim();
  });
  return { content, metadata };
}
