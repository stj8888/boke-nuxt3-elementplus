// https://nuxt.com/docs/api/configuration/nuxt-config
// import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
export default defineNuxtConfig({
    modules: [
        '@element-plus/nuxt',
        '@pinia/nuxt'
      ],
      elementPlus: { /** Options */ },
      typescript: {
		 shim: false
	},
  css: ['animate.css/animate.css', "@wangeditor/editor/dist/css/style.css"],
  plugins: [
    { src: '@/plugins/wow.client.js', mode: 'client' }, // 只在client(浏览器)上生效
    {src: "@/plugins/wang-editor.js", mode: 'client'}
  ],
  build: {
    transpile: [
        'echarts',
    ],
  },
})
