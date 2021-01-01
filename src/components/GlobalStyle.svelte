<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    @apply text-lg leading-normal break-all;
    color: theme('colors.black');
  }

  h1,
  h2,
  h3,
  p,
  pre {
    @apply leading-normal my-4;
  }

  h1 {
    @apply text-center text-3xl mt-8 mb-8;
  }

  h2 {
    @apply text-xl mt-8 font-bold;
    border-bottom: 1px solid #eaecef;
  }

  h3 {
    @apply text-lg;
  }

  a {
    @apply underline;
  }

  .blog {
    @apply text-xl max-w-lg ml-auto;
  }

  .card {
    @apply my-8;
  }

  .meta {
    @apply flex;
    color: theme('colors.gray');
  }

  .date {
    @apply text-xs;
    color: theme('colors.gray');
  }

  .title {
    @apply m-auto max-w-xl no-underline;
  }

  #profile-wrapper {
    @apply max-w-md mx-auto my-0;
  }

  main {
    @apply max-w-2xl py-0 px-8 my-0 mx-auto box-border relative;
  }

  header {
    @apply text-center mt-5;
    a {
      @apply text-xl mt-8 font-semibold no-underline;
    }
  }

  footer {
    @apply text-center mt-16;
  }
</style>
