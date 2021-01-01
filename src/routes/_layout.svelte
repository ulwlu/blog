<script lang="ts">
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import GlobalStyle from "../components/GlobalStyle.svelte";
</script>

<Header />
<main>
  <GlobalStyle />
  <slot></slot>
</main>
<Footer />
