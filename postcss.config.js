export default {
    plugins: {
        '@tailwindcss/postcss': {},
        autoprefixer: {}, // explicitly keep autoprefixer if needed, though v4 usually handles it. But for safety. 
        // Actually v4 docs say just @tailwindcss/postcss is enough. I will try just that.
    },
}
