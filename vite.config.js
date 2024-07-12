import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import copy from 'rollup-plugin-copy'
import {deleteSync} from 'del'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:true
  },
  plugins: [
    svelte(),
    copy({
      hook: 'buildStart',
      targets: [
        { src: './pdf.js-4.3.136/build/generic/*', dest: './public/pdf.js/', createPath: true },
      ],
    }),
  ],
})
