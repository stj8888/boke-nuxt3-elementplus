<template>
  <div class="left">
      <div class="avatar" @click="personalCenter">
        <el-avatar :src="url" />
        <span>点击头像进入博主个人中心</span>
      </div>
       <h2>石廷俊的博客</h2>
       <h3>欢迎来到这里</h3>
      <client-only>
        <SearchSerch></SearchSerch>
      </client-only>
        </div>
        <div id="svgAttributes"> <svg width="50" height="50" viewBox="0 0 128 128">
<polygon points="64 68.73495257774529 8.574 99.99360157831904 63.35822645138074 67.62292607860594 64 3.993601578319051 64.64177354861926 67.62292607860594 119.426 99.99360157831904 " fill="	#FF0000"></polygon>
</svg> </div>
</template>
<script setup>
import { UserFilled } from '@element-plus/icons-vue'
import anime from 'animejs'
const url='image/touxiang.png'
const router=useRouter()
onMounted(()=>{
  anime({
  targets: '#svgAttributes polygon',
  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
  easing: 'easeInOutExpo',
});
}) 
const personalCenter=()=>{
  router.push('/personal/center1')
}
</script>
<style lang="scss" scoped>

.left{
    display:flex;
    .avatar {
    margin-top: 10px;
    margin-right: 10px;
    height: 5px;
  }
  h2 {
    line-height: 60px;
  }
  h3{
    line-height: 60px;
    margin-left: 250px;
  }
  .Search{
  margin-top:  10px;
  }
  }
  #svgAttributes{
   text-align: end;
   margin-top: -99px;
}
</style>