const withTM = require('next-transpile-modules')(['@{{global_computed_inputs.shell_project_name}}/shared'])

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  basePath: '/{{inputs.zone_base_path}}',
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
