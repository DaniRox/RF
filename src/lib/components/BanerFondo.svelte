<script>
    export let h2 = "h2";
    export let h1 = "h1";
    export let img = "#";
</script>

<style>
    .baner {
        background-color: rgba(162, 238, 168, 0.5); /* Fondo con transparencia del 50% */
        width: 100%;
        height: 6rem;
        border-radius: 0.4rem;
        box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.10);
        margin: 0rem auto; /* Centra el componente horizontalmente */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        text-align: center; /* Centra el texto */
        position: relative;
    }

    .contenido {
        position: absolute;
        z-index: 2;
        color: black;
    }

    .h2 {
        font-size: 0.8rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    .h1 {
        font-size: 1.4rem;
        font-weight: 400;
        margin: 0;
    }

    .fondo {
        width: 100%;
        height: 100%;
        border-radius: 0.4rem;
        object-fit: cover;
        opacity: 0.5; /* Ajusta la opacidad de la imagen aquí */
    }

    @media (min-width: 375px) {
        .baner {
        width: 100%;
        height: 6rem;
        
        }
    }

    @media (min-width: 1024px) {
        .baner {
            height: auto;
            flex-direction: row;
            width: 94%;
        }

        .contenido {
            position: relative;
            width: 50%;
        }

        .h2 {
            font-size: 1.2rem;
        }

        .h1 {
            font-size: 1.8rem;
        }

        .fondo {
            width: 50%;
        }
    }
</style>

<div class="baner">
    <div class="contenido">
        <p class="h2">{h2}</p>
        <p class="h1">{h1}</p>
    </div>
    <img class="fondo" src={img} alt="Imagen de {h1}">
</div>
