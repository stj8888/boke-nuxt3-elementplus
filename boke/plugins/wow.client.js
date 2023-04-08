import { KinesisContainer, KinesisElement} from "vue-kinesis";
export default defineNuxtPlugin((nuxtApp)=>{
  nuxtApp.vueApp.component('kinesis-container', KinesisContainer)
  nuxtApp.vueApp.component('kinesis-element', KinesisElement)
})
