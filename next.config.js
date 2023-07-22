/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production'

const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['firebasestorage.googleapis.com'],
        unoptimized: true
    },
    plugins: {
    },
    output: 'export',
}

module.exports = nextConfig
