/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: false,
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default nextConfig;
