/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['firebasestorage.googleapis.com']
    },
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    }
    
}

module.exports = nextConfig
