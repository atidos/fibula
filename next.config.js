/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['firebasestorage.googleapis.com'],
    },
    plugins: {
    },
    basePath: '/fibula',
    assetPrefix: '/fibula',
    output: 'export'

}

module.exports = nextConfig
