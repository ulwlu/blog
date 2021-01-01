<script context="module" lang="ts">
  export async function preload({ params }) {
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  export let post: { slug: string; title: string, pubdate: string, html: any };
</script>

<svelte:head>
  <title>{post.title}</title>
  <meta property="og:title" content="{post.title}">
</svelte:head>
<div class='title'>
  <h1>{post.title}</h1>
</div>
<div class='content'>
  {@html post.html}
</div>
<div class='meta'>
  <p class='date'>{post.pubdate}</p>
</div>
