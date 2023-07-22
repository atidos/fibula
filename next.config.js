/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['firebasestorage.googleapis.com'],
    },
    plugins: {
    },
    output: 'export'

}

module.exports = nextConfig
