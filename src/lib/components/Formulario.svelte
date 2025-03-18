<script>
    import { writable } from 'svelte/store';
  
    let nombre = writable('');
    let apellido = writable('');
    let email = writable('');
    let modeloAuto = writable('');
    let añoAuto = writable('');
  
    function handleSubmit() {
      const datosCliente = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        modeloAuto: modeloAuto,
        añoAuto: añoAuto
      };
      console.log('Datos enviados:', datosCliente);
      // Aquí puedes agregar lógica para enviar los datos a tu servidor
    }
  </script>
  
  <style>
    .form-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      padding: 1rem;
    }
  
    .formulario {
      background-color: #e0f7fa;
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 2rem;
      width: 90%;
      max-width: 400px;
      color: #0d47a1;
    }
  
    .formulario input,
    .formulario label {
      display: block;
      width: 100%;
      margin-bottom: 1rem;
    }
  
    .formulario label {
      font-weight: bold;
    }
  
    .formulario input {
      padding: 0.5rem;
      border: 1px solid #0d47a1;
      border-radius: 5px;
    }
  
    .formulario button {
      background-color: #0d47a1;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .formulario button:hover {
      background-color: #0b3c91;
    }
  </style>
  
  <div class="form-container">
    <form class="formulario" on:submit|preventDefault={handleSubmit}>
      <label for="nombre">Nombre:</label>
      <input id="nombre" bind:value={$nombre} type="text" required />
  
      <label for="apellido">Apellido:</label>
      <input id="apellido" bind:value={$apellido} type="text" required />
  
      <label for="email">Email:</label>
      <input id="email" bind:value={$email} type="email" required />
  
      <label for="modeloAuto">Modelo del Auto:</label>
      <input id="modeloAuto" bind:value={$modeloAuto} type="text" required />
  
      <label for="añoAuto">Año del Auto:</label>
      <input id="añoAuto" bind:value={$añoAuto} type="number" required />
  
      <button type="submit">Enviar</button>
    </form>
  </div>
  