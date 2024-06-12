import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const extensions = ['.js', '.ts'];

export default {
  input: 'src/index.ts',
  output: {
    dir: './libs',
    format: 'cjs'
  },
  plugins: [resolve({
    extensions,
    modulesOnly: true,
  }), typescript()]
};