<script>
    import "../../styles/reset.css";
    import "../../styles/colors.css";
	import Card from "$lib/components/Card.svelte";
	import Container from "$lib/components/Container.svelte";

</script>



<style>
    .Vehiculos {
        width: 100%;
        padding: 1rem 5%;
        min-height: 85vh;
    }

    .Vehiculos__titles {
        color: var(--dark);
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .title {
        font-size: 1.8rem;
        font-weight: 900;
    }

    .subtitle {
        font-size: 1rem; 
        font-weight: 400;
    }

    /* Media query para dispositivos móviles */
    @media (min-width: 480px) {
        .title {
            font-size: 1.9rem; /* Ajustamos el tamaño para móviles */
        }

        .subtitle {
            font-size: 1.1rem; /* Ajustamos el tamaño para móviles */
        }
    }

    @media (min-width: 768px) {
        .Vehiculos__titles {
            gap: 0.6rem;
        }
        
        .title {
            font-size: 2rem; /* Ajustamos el tamaño para móviles */
        }

        .subtitle {
            font-size: 1.2rem; /* Ajustamos el tamaño para móviles */
        }
    }

    @media (min-width: 1024px) {
        .title {
            font-size: 2.1rem; /* Ajustamos el tamaño para móviles */
        }

        .subtitle {
            font-size: 1.3rem; /* Ajustamos el tamaño para móviles */
        }
    }
</style>



<div class="Vehiculos">
    <div class="Vehiculos__titles">
        <h1 class="title">Elegi tu vehiculo hoy</h1>
        <h2 class="subtitle">Tenemos todo lo que buscas</h2>
    </div>


    <Container> 
        <Card
            img="/img/auto1.jpg"
            descripcion="Cotiza tu seguro y busca el mejor precio."
        />

        <Card
            img="/img/auto2.jpg"
            descripcion="Cotiza tu seguro y busca el mejor precio."
        />

        <Card
            img="/img/auto3.jpg"
            descripcion="Cotiza tu seguro y busca el mejor precio."
        />

        <Card
            img="/img/auto4.jpg"
            descripcion="Encontra el vehiculo perfecto para vos"
        />

        <Card
            img="/img/auto1.jpg"
            descripcion="Plantin de tomate cherry 10cm alto"
        />

        <Card
            img="/img/auto2.jpg"
            descripcion="Plantin de tomate cherry 10cm alto"
        />

    </Container>


    <Container>

        <Card
            img="/img/auto4.jpg"
            descripcion="Encontra el vehiculo perfecto para vos"
        />

        <Card
            img="/img/auto1.jpg"
            descripcion="Plantin de tomate cherry 10cm alto"
        />

        <Card
            img="/img/auto2.jpg"
            descripcion="Plantin de tomate cherry 10cm alto"
        />

        <Card
            img="/img/auto1.jpg"
            descripcion="Cotiza tu seguro y busca el mejor precio."
        />

        <Card
            img="/img/auto2.jpg"
            descripcion="Cotiza tu seguro y busca el mejor precio."
        />

        <Card
            img="/img/auto3.jpg"
            descripcion="Cotiza tu seguro y busca el mejor precio."
        />

    </Container>

</div>