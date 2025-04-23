/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    images: {
        unoptimized: true,
    },
    basePath: '/accessible-blog',
    trailingSlash: true,
};

module.exports = nextConfig; 