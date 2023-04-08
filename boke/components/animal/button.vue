<template>
<h1 class="animate__animated animate__infinite animate__bounce animate__delay-2s" style="margin-left: 50px; color: red;">hello 帅哥 美女</h1>
<div class="right">
  <div class="bord" id="motionPath">
    <div id="lineDrawing"> <svg viewBox="0 0 280 100">
<g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" class="lines">
<path d="M58 80V50.12C57.7 41.6 51.14 35 43 35a15 15 0 0 0 0 30h7.5v15H43a30 30 0 1 1 0-60c16.42 0 29.5 13.23 30 29.89V80H58z" stroke-dasharray="316.85528564453125" style="stroke-dashoffset: 316.855px;"></path>
<path d="M73 80V20H58v60h15z" stroke-dasharray="150" style="stroke-dashoffset: 150px;"></path>
<path d="M58 80V49.77C58.5 33.23 71.58 20 88 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80H58zm75 0V20h-15v60h15z" stroke-dasharray="441.1739501953125" style="stroke-dashoffset: 441.174px;"></path>
<path d="M118 80V49.77C118.5 33.23 131.58 20 148 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80h-15zm-7.5-60a7.5 7.5 0 1 1-7.48 8v-1c.25-3.9 3.5-7 7.48-7z" stroke-dasharray="338.3053894042969" style="stroke-dashoffset: 338.305px;"></path>
<path d="M133 65a15 15 0 0 1-15-15v-7.5h-15V50a30 30 0 0 0 30 30V65zm30 15V49.77C163.5 33.23 176.58 20 193 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80h-15z" stroke-dasharray="406.8699035644531" style="stroke-dashoffset: 406.87px;"></path>
<path d="M238 65a15 15 0 0 1 0-30c8.1 0 14.63 6.53 15 15h-15v15h30V49.89C267.5 33.23 254.42 20 238 20a30 30 0 0 0 0 60V65z" stroke-dasharray="301.8561706542969" style="stroke-dashoffset: 301.856px;"></path>
<path d="M260.48 65a7.5 7.5 0 1 1-7.48 8v-1c.26-3.9 3.5-7 7.48-7z" stroke-dasharray="47.128875732421875" style="stroke-dashoffset: 47.1289px;"></path>
</g>
</svg> </div>
</div>
<div class="swiper" style="width: 100%; height: 100%; margin-left: 50px;">
  <el-carousel height="600px" direction="vertical"  >
    <el-carousel-item v-for="item in list" :key="item">
      <span>{{ item.title }}</span>
      <img :src="item.photo" alt="vue"  @click="hande(item.link)">
    </el-carousel-item>
  </el-carousel>
</div>
</div>
<el-calendar ref="calendar" >
    <template #header="{ date }">
      <span>美好的一天记得学习哦</span>
      <span>{{ date }}</span>
      <el-button-group>
        <el-button size="small" @click="selectDate('prev-year')">
         前一年
        </el-button>
        <el-button size="small" @click="selectDate('prev-month')">
          前一个月
        </el-button>
        <el-button size="small" @click="selectDate('today')">今天</el-button>
        <el-button size="small" @click="selectDate('next-month')">
         下个月
        </el-button>
        <el-button size="small" @click="selectDate('next-year')">
        明年
        </el-button>
      </el-button-group>
    </template>
  </el-calendar>
</template>
  <script setup>
import {onMounted,ref} from 'vue'
import anime from 'animejs'
const calendar = ref()
const list=[
  {
    photo:'swiper/vue2.png',
    title:'Vue的学习',
    link:'https://cn.vuejs.org/'
  },
  {
    photo:'swiper/nuxt.png',
    title:'nuxt3的学习',
    link:'https://nuxt.com.cn/'
  },
  {
    photo:'swiper/github.png',
    title:'github的学习',
    link:'https://github.com/'
  },
  {
    photo:'swiper/juejin.png',
    title:'掘金的学习',
    link:'https://juejin.cn/'
  }
]
const hande=(item)=>{
 window.open(item,'_blank')
}
const selectDate = (val) => {
  calendar.value.selectDate(val)
}
onMounted(async ()=>{
  anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

})
</script>
<style lang="scss" scoped>
        .bord{
          border-style: solid;
          border-width: 5px;
          width: 200px;
          height: 600px;
          margin-left: 60px;
          background-color: green;
        }
        .el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.right{
  display: flex;
}
.el-calendar{
  margin-left: 60px;
  background-color:chocolate;
}
.swiper{
  img{
    width: 100%;
    height: 100%;
  }
}
</style>