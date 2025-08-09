import { build } from 'esbuild'

async function buildPlugin(buildOptions) {
  await build({
    ...buildOptions,
    minify: true,
    bundle: true,
  })
}

await buildPlugin({
  entryPoints: ['builds/cdn.js'],
  outfile: 'dist/count.min.js',
})

await buildPlugin({
  entryPoints: ['builds/module.js'],
  outfile: 'dist/count.esm.js',
  platform: 'neutral',
  mainFields: ['main', 'module'],
})
