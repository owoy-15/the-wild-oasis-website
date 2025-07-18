/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ilhufbopeixqbiokklpn.supabase.co",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
    domains: ["lh3.googleusercontent.com"],
  },
  // our site will kind of get exported completely
  // as static assets that we can deploy anywhere.
  // then we get the out folder
  // output: "export",
};

export default nextConfig;
