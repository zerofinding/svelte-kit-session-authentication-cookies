<script>
  import { page } from '$app/stores';
</script>

{#key $page.path}
<slot></slot>
{/key}

<footer>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</footer>

<style>
  footer{
    color: #777;
    padding-top: 20px;
  }
</style>
