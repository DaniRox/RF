<script>
	import HoverCard from "$lib/components/HoverCard.svelte";

  const categories = [
    { text: "Seguro para Autos", img: "https://corporate-site-content.gruposancorseguros.com/SSA/Categories/seguro-automovil20240530103603674.jpg", link: "/auto" },
    { text: "Seguro para el Hogar", img: "https://corporate-site-content.gruposancorseguros.com/SSA/Categories/hogar20240530103626760.jpg", link: "/personas/hogar" },
    { text: "Seguro para Motos", img: "https://corporate-site-content.gruposancorseguros.com/SSA/Categories/seguro-de-moto20240530103711109.jpg", link: "/personas/moto" },
    { text: "Seguro de Movilidad", img: "https://corporate-site-content.gruposancorseguros.com/SSA/Categories/movilidad20240530103725481.jpg", link: "/personas/movilidad" },
    { text: "Seguro de Vida", img: "https://corporate-site-content.gruposancorseguros.com/SSA/Categories/vida20240530103745154.jpg", link: "/personas/vida" },
    { text: "Seguro de Accidentes Personales", img: "https://corporate-site-content.gruposancorseguros.com/SSA/Categories/seguro-ap20240530103803989.jpg", link: "/personas/accidentes-personales" },
    { text: "Seguro de Salud", img: "https://corporate-site-content.gruposancorseguros.com/SSA/Categories/salud20240530103817932.jpg", link: "/personas/salud" },
    { text: "Seguro para Embarcaciones", img: "https://corporate-site-content.gruposancorseguros.com/SSA/Categories/embarcaciones20240530103830253.jpg", link: "/personas/embarcacion" },
    { text: "Seguro de Tecnología", img: "https://corporate-site-content.gruposancorseguros.com/SSA/Categories/tecnologia20240711095941062.jpg", link: "/personas/tecnologia" }
  ];
</script>

<style>
  :root {
    --base-font-size: 16px;
  }

  h1, h2 {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    padding-left: 0.5cm;
  }

  h1 {
    font-size: calc(2rem + 1vw);
  }

  h2 {
    font-size: calc(1.5rem + 0.5vw);
  }

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 10vh;
    padding: 2vh 2vw;
    background-color: #fff;
  }

  .login-container {
    width: 100%;
    max-width: 90vw;
    text-align: center;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -1vw;
  }

  .col {
    flex: 1 1 calc(25% - 2vw);
    max-width: calc(25% - 2vw);
    margin: 1vw;
    min-width: 200px;
  }

  @media (max-width: 1024px) {
    .col {
      flex: 1 1 calc(33.333% - 2vw);
      max-width: calc(33.333% - 2vw);
    }
  }

  @media (max-width: 768px) {
    .col {
      flex: 1 1 calc(50% - 2vw);
      max-width: calc(50% - 2vw);
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: calc(1.75rem + 1vw);
    }

    h2 {
      font-size: calc(1.25rem + 0.5vw);
    }

    .col {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
</style>

<div>
    <div class="main-content">
        <h2>Pedi tu presupuesto. </h2>
        <h1 class="title">Mejoramos cualquier precio.</h1>
    </div> 
        
    <div id="categories-home" class="row">
    {#each categories as category, i}
        <div class="col">
        <HoverCard 
            text={category.text}
            overlay="rgba(167,3,85, 0.3)"
            img={category.img}
            link={category.link}
            linkText="Ver más"
        />
        </div>
    {/each}
    </div>
</div>

