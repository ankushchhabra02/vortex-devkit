import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/hooks/index.ts',
    'src/utils/index.ts',
    'src/async/index.ts',
    'src/ai/index.ts',
    'src/browser/index.ts',
    'src/core/index.ts'
  ],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: true,
  external: ['react', 'react-dom']
});
