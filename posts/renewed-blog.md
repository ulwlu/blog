---
title: Renewed blog
pubdate: 2021-01-02
---

I had been running a blog with `Sapper, Contentful and Netlify` for a year, and Sapper is informed as deprecated on October 2020.

I decided to move to Svelte-kit, and created a new blog [here](https://github.com/ulwlu/ulwlu-blog).

However, svelte-kit doesn't supply SSG fully yet. It has `svelte-kit adapt` command to export like Sapper, but it doesn't commit a html file yet.

Therefore, I've just only refactor Sapper with `Typescript, TailwindCSS, PostCSS, Rollup and Vercel`. If svelte-kit has been released officially in the future, I'll move to in the future.

Besides, contentful is great tool but kind of annoying to login. It gets slow on preload so I don't think I'll use it again.
