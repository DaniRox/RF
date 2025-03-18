<script>
	import Card from "$lib/components/Card.svelte";
	import CardVehiculo from "$lib/components/CardVehiculo.svelte";
	import Container from "$lib/components/Container.svelte";


</script>

<style>
    .content{
        margin-top: 18px;
        width: 100%;
        min-height: 80vh;
    }
    h1, h2 {
        font-size: 2rem; /* Aumentamos el tamaño de fuente */
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 1.5rem;
        padding-left: 0.5cm; /* Movemos el texto medio centímetro a la derecha */
        
    }

    h2 {
        font-size: 1.5rem; /* Un poco más pequeño que h1 */
    }

    /* Media query para dispositivos móviles */
    @media (max-width: 480px) {
        h1 {
            font-size: 1.75rem; /* Ajustamos el tamaño para móviles */
        }

        h2 {
            font-size: 1.25rem; /* Ajustamos el tamaño para móviles */
        }
    }
</style>

<div class="content">
    <h1>Elegi tu vehiculo hoy</h1>
    <h2>Tenemos todo lo que buscas</h2>

    
    <Container> 
        <a  href="/Servicios"> 
            <CardVehiculo
            titulo="Seguros"
            img="/img/lechugamanteca.jpg"
            --precio="Seguros"
            descripcion="Cotiza tu seguro y busca el mejor precio."/>
        </a>
        <a  href="/Servicios"> 
            <CardVehiculo
            titulo="Seguros"
            img="/img/lechugamanteca.jpg"
            --precio="Seguros"
            descripcion="Cotiza tu seguro y busca el mejor precio."/>
        </a>
    </Container>

</div>