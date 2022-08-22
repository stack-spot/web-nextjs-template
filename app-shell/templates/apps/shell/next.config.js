const withTM = require('next-transpile-modules')(['shared'])

module.exports = withTM({
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'api.js', 'api.ts'],
  compiler: {
    styledComponents: true,
  },

  async rewrites() {
    return []
  },
})
