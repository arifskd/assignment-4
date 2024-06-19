/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'digimon.shadowsmith.com',
			}
		]
	}
};

export default nextConfig;
