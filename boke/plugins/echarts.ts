import * as echarts from 'echarts'
export default defineNuxtPlugin((nuxtApp)=>{
    nuxtApp.vueApp.config.globalProperties.$echarts = echarts
})