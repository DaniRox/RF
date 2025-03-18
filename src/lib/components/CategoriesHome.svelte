<script>
    import HoverCard from './HoverCard.svelte';
  
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
    .row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -0.5rem;
      margin-left: -0.5rem;
    }
  
    .g-1 {
      --bs-gutter-x: 0.25rem;
      --bs-gutter-y: 0.25rem;
    }
  
    .col-12 {
      flex: 0 0 auto;
      width: 100%;
    }
  
    .col-6 {
      flex: 0 0 auto;
      width: 50%;
    }
  
    @media (min-width: 992px) {
      .col-lg-3 {
        flex: 0 0 auto;
        width: 25%;
      }
    }
  </style>

  
<div id="categories-home" class="row g-1">
    {#each categories as category, i}
      <div class={i === 0 ? "col-12 col-lg-3" : "col-6 col-lg-3"}>
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
  