<script>
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'

  let name

  onMount(async () => {
    const res = await fetch('/auth/authenticated')
    const user = await res.json()

    if(res.status !== 200){
      goto('/auth/unauthorized')
    }

    name = user.name
  })
</script>

{#if name}
<header>
  <h1>Welcome to SvelteKit, {name}</h1>
</header>

<a href="/logout" title="Logout" alt="Logout">Logout</a>
{/if}