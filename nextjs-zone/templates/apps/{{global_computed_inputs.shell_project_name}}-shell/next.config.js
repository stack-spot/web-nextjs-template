const withTM = require('next-transpile-modules')(['@{{global_computed_inputs.shell_project_name}}/shared'])

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
  },
  async rewrites() {
    return [
      
    ]
  }
}

module.exports = withTM(nextConfig)
