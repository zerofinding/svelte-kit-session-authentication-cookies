<script>
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'

  onMount(async () => {
    const res = await fetch('/auth/logout')
    goto('/login')
  })
</script>
