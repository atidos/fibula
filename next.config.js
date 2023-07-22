/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['firebasestorage.googleapis.com'],
        unoptimized: true
    },
    plugins: {
    },
    output: 'export'
    
}

module.exports = nextConfig
