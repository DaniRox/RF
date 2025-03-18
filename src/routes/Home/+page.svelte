<script>
// @ts-nocheck
    import Baner from '$lib/components/Baner.svelte';
    import ContainerVertical from '$lib/components/ContainerVertical.svelte';
    import Container from '$lib/components/Container.svelte';
    import Card from '../../lib/components/Card.svelte';
	import BanerFondo from '$lib/components/BanerFondo.svelte';
	import Carrusel from "$lib/components/Carrusel.svelte";
    
    let images = [  
        'static/img/ofertas.jpeg',
        'static/img/plantinesProductos.jpeg',  
        'https://via.placeholder.com/600x300?text=Image+2',  
        'https://via.placeholder.com/600x300?text=Image+3',  
        'https://via.placeholder.com/600x300?text=Image+4',  
    ];  
</script>

<style>
    .Home{
        width: 100%;
        height: auto;
        min-height: 50vh;
    }
    .banervehiculos{
        margin-top: 0.2rem; /* MArgen con el objeto q tiene arriba */
        margin-right: 1rem; /* Ajusta esta medida según tus necesidades */
    }
    .banerdoble{
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        gap: 0.9rem;
        justify-content: flex-start;
        scrollbar-width: none;
        overflow: auto;
        margin-right: 0rem; /* Ajusta esta medida según tus necesidades */     
    }
    .banerseguros { 
        display: block; 
        margin: 0.1rem auto; 
        max-width: 13rem; 
        height: 6rem;
        width: 100%; 
        
    }
    .banerdetailing { 
        display: block; 
        margin: 0.1rem auto; 
        max-width: 13rem; 
        height: 6rem;
        width: 10rem; 
    }
    @media (min-width: 375px) {
        .banerdoble{
            gap: 0rem;
            margin-right: rem;
            margin-left: 0rem;
        }        
        .banerdetailing{
            width: 90%;
            margin-right: 0.5rem;
            margin-left: 0.5rem;
        }
        .banerseguros{
            width: 90%;
            margin-right: 0rem;
            margin-left: 0rem;
        }
    }
        @media (min-width: 425px) {
        .banerdoble{
            gap: 0rem;
            margin-right: 0rem;
            margin-left: 0rem;
        }        
        .banerdetailing{
            width: 90%;
            margin-right: 0.5rem;
            margin-left: 0rem;

        }
        .banerseguros{
            width: 90%;
            margin-right: 1rem;
            margin-left: 0rem;
        }
    }
    @media (min-width: 480px) {
        .banerdoble{
            gap: 1rem;
            margin-right: 0rem;
            margin-left: 0rem;
        }        
        .banerdetailing{
            width: 100%;
            margin-right: 0.5rem;
            margin-left: 0rem;

        }
        .banerseguros{
            width: 100%;
            margin-right: 0rem;
            margin-left: 0rem;
        }
    }
</style>

<div class="Home" id="Inicio">
    <Carrusel/>   
    <ContainerVertical>  
       <a href="/Vehiculos" class="banervehiculos"> 
            <BanerFondo 
            h2="Encontra lo que buscas"
            h1="Vehiculos"
            img="/img/img3.jpg"/>
        </a>
        <div class="banerdoble">
            <a href="/Detailing" class="banerdetailing"> 
                <BanerFondo
                h2="Que buscas?"
                h1="Detailing"
                img="/img/img3.jpg"/>
            </a>
            <a href="/Seguros" class="banerseguros">
                <BanerFondo
                h2="Cotiza hoy mismo"
                h1="Seguros"
                img="/img/img3.jpg"/>
            </a>
        </div>
    </ContainerVertical>

    <Container> 
        <a  href="/Servicios"> 
            <Card
            titulo="Seguros"
            img="/img/lechugamanteca.jpg"
            precio="Seguros"
            descripcion="Cotiza tu seguro y busca el mejor precio."/>
        </a>
        <a  href="/Productos"> 
            <Card
            titulo="Vehiculos"
            img="/img/lechugamanteca.jpg"
            precio="Vehiculos"
            descripcion="Encontra el vehiculo perfecto para vos"/>
        </a>
        <Card
            titulo="Plantines"
            img="/img/lechugamanteca.jpg"
            precio="$ 1.200"
            descripcion="Plantin de tomate cherry 10cm alto"/>
        <Card
            titulo="Plantines"
            img="/img/lechugamanteca.jpg"
            precio="$ 1.200"
            descripcion="Plantin de tomate cherry 10cm alto"/>
    </Container>
</div>
