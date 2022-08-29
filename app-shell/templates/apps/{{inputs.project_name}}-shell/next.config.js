const withTM = require('next-transpile-modules')(['@{{inputs.project_name}}/shared'])

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: [
    ]
  },
  reactStrictMode: true,
  env: {
  },
  pageExtensions: [
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    'api.js',
    'api.ts'
  ],
  compiler: {
    styledComponents: true
  }
}

module.exports = withTM(nextConfig)
