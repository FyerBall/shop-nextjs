module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  env: {
    strip_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
