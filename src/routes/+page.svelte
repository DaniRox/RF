<script>
    import '../styles/reset.css';
    import '../styles/colors.css';
    import Home from "./Home/+page.svelte";
    
</script>

<style>
    :root{
        font-family: "Roboto", sans-serif;
        font-size: 16px;
    }

    .main{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
    }

</style>



<div class="main">
    <Home />
</div>