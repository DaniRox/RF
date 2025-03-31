import adapter from '@sveltejs/adapter-vercel';

const config = {
    kit: {
        // Usa el adaptador específico para Vercel
        adapter: adapter()
    }
};

export default config;