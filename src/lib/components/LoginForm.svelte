<script>
    import LoginForm from './LoginForm.svelte';
  
    function handleLogin(event) {
      const userData = event.detail;
      console.log('Usuario ha iniciado sesión:', userData);
      // Aquí manejarías el proceso de inicio de sesión real
      // y guardarías los datos en tu base de datos cuando la tengas
    }
  </script>
  
  <LoginForm on:login={handleLogin} />