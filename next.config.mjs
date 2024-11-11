/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
      const destination = process.env.OFFRAMP_SERVER ?? '/';
      // console.log({destination})
      return [
        {
          source: '/node-api/:path*',
          destination: `${destination}/:path*`
        }
      ];
    },
}
export default nextConfig;
