<script context="module" lang="ts">
  export function preload() {
    return this.fetch(`blog.json`).then((r: { json: () => any; }) => r.json()).then((posts: { slug: string; title: string, html: any }[]) => {
      return { posts };
    });
  }
</script>

<script lang="ts">
  export let posts: { slug: string; title: string, pubdate: string, html: any }[];
</script>

<svelte:head>
  <title>ulwlu's blog</title>
  <meta property="og:title" content="ulwlu's blog">
</svelte:head>
<div class='blog'>
{#each posts as post}
  <div class='card'>
    <div class='meta'>
      <span class='date'>{post.pubdate}</span>
    </div>
    <a rel='prefetch' class='title' href='blog/{post.slug}'>{post.title}</a>
  </div>
{/each}
</div>
