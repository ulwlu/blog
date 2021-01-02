<script lang="ts">
  import { preferences } from './preferences'
  import { onMount } from "svelte";
  onMount(() => {
    if ($preferences.theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
  })
  $: {
    if (typeof document != 'undefined') {
      if ($preferences.theme === 'dark') {
        document.querySelector('html').classList.add('dark')
      } else {
        document.querySelector('html').classList.remove('dark')
      }
    }
  }
</script>

<footer>
  <p>
    <a href='blog'>blog</a>
    <button on:click={()=> $preferences.theme = $preferences.theme === 'dark' ? 'light' : 'dark' }>
      want {$preferences.theme === 'dark' ? 'light' : 'dark'} theme?
    </button>
  </p>
</footer>
