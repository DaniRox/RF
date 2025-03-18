<script>
	import Formulario from "$lib/components/Formulario.svelte";



</script>

<style>
    h1{
        margin: 1.5rem 5%;
        font-weight: 500;
        font-size: 1.2rem;
    }    
    @media (min-width: 1024px){
        h1{
            margin: 1.5rem 3%;
        }
    }
    .Servicios{
        min-height: 50vh;
    }


</style>

<div class="Servicios" id="Servicios">
    <h1>Tu vehiculo ideal te espera</h1>
    <h2> Si no esta lo traemos. Dejanos tus comentarios.</h2>
    <Formulario/>
</div>