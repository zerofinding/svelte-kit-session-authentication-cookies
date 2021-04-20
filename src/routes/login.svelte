<script>
  import { goto } from '$app/navigation'
  
  let email
  let password
  let err

  const handleLogin = async () => {
    err = undefined
    
    try {
      const res = await fetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify({
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
  <h1>Log in to Cookie</h1>
</header>

<div class="container">
  <div>
    <label for="email">Email</label>
    <input id="email" type="email" name="email" bind:value={email} placeholder="Your Email.." />
  </div>
  <div>
    <label for="password">Password</label>
    <input id="password" type="password" name="password" bind:value={password} placeholder="Your Password.." />
  </div>
  <div>
    <button on:click={handleLogin}>Login</button>
    
    {#if err}
    <p>{err}</p>
    {/if}
  </div>
  <div>
    <a href="/" title="Sign Up" alt="Sign Up">Forgot password?</a> | <a href="/signup" title="Login" alt="Login">Sign Up for Cookie</a>
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