<script>
  import { goto } from '$app/navigation'
  
  let name
  let email
  let password
  let err

  const handleRegister = async () => {
    err = undefined
    
    try {
      const res = await fetch('/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      res.ok ? goto('/dashboard') : err = 'An Error response..'
    } catch(e) {
      // statements
      console.log(e);
      err = 'An Error occured..'
    }
  }
</script>

<header>
  <h1>Create your Cookie</h1>
</header>

<div class="container">
  <div>
    <label for="name">Name</label>
    <input id="name" type="text" name="name" bind:value={name} placeholder="Your Name.." />
  </div>
  <div>
    <label for="email">Email</label>
    <input id="email" type="email" name="email" bind:value={email} placeholder="Your Email.." />
  </div>
  <div>
    <label for="password">Password</label>
    <input id="password" type="password" name="password" bind:value={password} placeholder="Your Password.." />
  </div>
  <div>
    <button on:click={handleRegister}>Register</button>
    
    {#if err}
    <p>{err}</p>
    {/if}
  </div>
  <div>
    <a href="/login" title="Login" alt="Login">Login for Cookie</a>
  </div>
</div>

<style>
  label{
    display: none;
  }
  div{
    padding: 4px;
  }
</style>