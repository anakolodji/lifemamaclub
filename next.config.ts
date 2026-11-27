import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Keep links to the old static pages working.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/parcerias.html", destination: "/parcerias", permanent: true },
      {
        source: "/candidatura-empresas.html",
        destination: "/candidatura-empresas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
