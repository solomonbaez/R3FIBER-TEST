/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["three"],
    experimental: {
        scrollRestoration: false,
    }
}

module.exports = nextConfig
