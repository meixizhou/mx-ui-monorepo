import path from 'node:path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs(),
    postcss({
      extract: 'styles.css',
      minimize: true,
      sourceMap: true,
      config: {
        path: path.resolve('postcss.config.cjs')
      }
    }),
    typescript({
      tsconfig: path.resolve('tsconfig.json'),
      declarationDir: 'dist',
      outputToFilesystem: true
    })
  ],
  external: ['react', 'react-dom', '@radix-ui/themes']
};
