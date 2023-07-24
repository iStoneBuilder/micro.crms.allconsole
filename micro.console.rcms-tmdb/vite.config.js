import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // 根路径，也就是项目的基础路径
  base: '/rcms',
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@rcms": fileURLToPath(new URL("./src/service/index", import.meta.url)),
      "@component": fileURLToPath(new URL("./src/components", import.meta.url)),
    },
  },
  // 构建配置
  build: {
    // 输出目录，默认是 dist
    outDir: 'dist',
    // 是否开启 sourcemap
    sourcemap: false,
    // 是否开启压缩
    minify: 'terser', // 可选值：'terser' | 'esbuild'
    // 是否开启 brotli 压缩
    brotli: true,
    // 是否将模块提取到单独的 chunk 中，默认是 true
    chunkSizeWarningLimit: 500,
    // 是否提取 CSS 到单独的文件中
    cssCodeSplit: true,
    // 是否开启 CSS 压缩
    cssMinify: true,
    // 是否开启 CSS 去重
    cssInlineLimit: 4096,
    // 启用/禁用 esbuild 的 minification，如果设置为 false 则使用 Terser 进行 minification
    target: 'es2018', // 可选值：'esnext' | 'es2020' | 'es2019' | 'es2018' | 'es2017' | 'es2016' | 'es2015' | 'es5'
    // 是否开启 Rollup 的代码拆分功能
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
    // 是否开启增量式构建
    incremental: false,
  },
});
