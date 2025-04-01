import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter({
        pages: 'build',
        assets: 'build',
        fallback: 'index.html' // Para manejar rutas dinámicas
        })
    }
};

export default config;