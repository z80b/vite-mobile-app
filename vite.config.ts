import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import url from 'url';
import path, { resolve } from 'path';
import svgicons from 'rollup-plugin-svg-icons';

export default defineConfig(({ command, mode }) => ({
  appMode: 'cutom',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          whitespace: 'preserve',
          comments: mode === 'development',
        },
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src/') },
    ],
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: (name, filepath) => {
        const { pathname } = url.parse(filepath);
        const filename = path.basename(pathname, '.vue');
        return `${filename.toLowerCase()}-${name}`;
      },
      localsConvention: 'dashesOnly',
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        svgicons({
          inputFolder: 'src/components/Icon/icons',
          output: 'public/bundle.svg',
        }),
      ],
    },
    minify: mode === 'production',
  },
}));
