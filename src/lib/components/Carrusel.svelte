<script>
    export let img1 = "/img/img1.jpg";
    export let img2 = "/img/img2.jpg";
    export let img3 = "/img/img3.jpg"; 

    let images = [
        img1, 
        img2, 
        img3
    ];

    let currentImageIndex = 0; 

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }

    let intervalId =0;  

    function startAutoSlide() {
        intervalId = setInterval(nextImage, 3000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    startAutoSlide();
</script>



<style>
    .Carrusel { 
        position: relative; 
        width: 100%;
        height: 10rem;
        margin: 0 auto; 
        overflow: hidden;
    }

    .image-container { 
        display: flex; 
        transition: transform 0.5s ease; 
        width: 100%;
        height: 100%;
    } 

    .image-wrapper { 
        min-width: 100%;
    } 

    .image-wrapper img {
        width: 100%; 
        height: auto;
        object-fit: cover;
        object-position: center; 
    } 

    .arrows { 
        position: absolute; 
        top: 50%; 
        transform: translateY(-50%); 
        display: flex; 
        justify-content: 
        space-between; 
        width: 100%; 
    }

    .arrow { 
        background-color: transparent; 
        border: none; 
        font-size: 1rem; 
        cursor: pointer; 
        padding: 0rem; 
    } 

    .arrow.left { 
        left: 0;
        transform: rotate(90deg);
    } 

    .arrow.right { 
        right: 0;
        transform: rotate(270deg);
    }

    .flechaicono{
        width: 1.7rem;
    }

    .image-wrapper { 
        mask-image: linear-gradient(
        white 85%,
        transparent
        )
    }

    @media (min-width: 768px){
        .Carrusel { 
            width: 100%;
            height: 18rem;
        }

        .flechaicono { 
            width : 3rem; 
        }
    }

    @media (min-width: 1024px){
        .Carrusel { 
            width: 100%;
            height: 23rem;
        }

        .flechaicono { 
            width : 4rem; 
        }
    }
</style>



<div class="Carrusel">
    <div class="image-container" style="transform: translateX({-currentImageIndex * 100}%)"> 
        {#each images as image} 
            <div class="image-wrapper">
                <img src={image} alt="Carrusel Image" />
            </div> 
        {/each}
    </div>

    <div class="arrows"> 
        <button class="arrow left" on:click={prevImage}><img class="flechaicono"  src="/img/flechaicono.svg" alt=""> </button> 
        <button class="arrow right" on:click={nextImage}><img class="flechaicono" src="/img/flechaicono.svg" alt=""></button>
    </div>
</div>