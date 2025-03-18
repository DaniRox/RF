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
    /* Estilos específicos para h1 y h2 */
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
  /* El resto de los estilos permanecen sin cambios */
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 10rem;
    padding: 1rem;
    background-color: #fff;
  }

  .login-container {
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -0.25rem;
    margin-left: -0.25rem;
  }

  .g-1 {
    --bs-gutter-x: 0.5rem;
    --bs-gutter-y: 0.5rem;
  }

  .col {
    flex: 0 0 auto;
    width: 50%;
    padding: 0.25rem;
  }

  @media (min-width: 768px) {
    .col {
      width: 25%;
    }
  }
</style>

<div>
    <div class="main-content">
        <!-- El contenido HTML permanece sin cambios -->
        <h2>Pedi tu presupuesto. </h2>
        <h1 class="title">Mejoramos cualquier precio.</h1>
        <!-- ... resto del contenido ... -->
    </div> 
        
    <div id="categories-home" class="row g-1">
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