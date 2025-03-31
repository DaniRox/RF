<script>
    export let text;
    export let overlay;
    export let img;
    export let link;
    export let linkText;
</script>



<style>
    .hover-card {
        position: relative;
        overflow: hidden;
        height: 100px;
        border-radius: 8px;
    }

    .hover-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--overlay-color);
        opacity: 1;
        transition: opacity 0.3s ease;
    }

    h3 {
        color: white;
        text-align: center;
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
    }

    a {
        color: white;
        text-decoration: none;
        padding: 0.25rem 0.5rem;
        border: 1px solid white;
        border-radius: 4px;
        transition: background-color 0.3s ease;
        font-size: 0.7rem;
    }

    a:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    @media (min-width: 768px) {
        .hover-card {
            height: 200px;
        }

        .content {
            opacity: 0;
        }

        .hover-card:hover .content {
            opacity: 1;
        }

        .hover-card:hover img {
            transform: scale(1.1);
        }

        h3 {
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        a {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
        }
    }
</style>



<div class="hover-card" style="--overlay-color: {overlay}">
    <img src={img || "/placeholder.svg"} alt={text} />
    <div class="content">
        <h3>{text}</h3>
        <a href={link}>{linkText}</a>
    </div>
</div>

