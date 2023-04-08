<template>
  <div class="top">
    <el-page-header title="返回" @back="goBack" >
      <template #content>
        <span class="text-large font-600 mr-3"> 详细信息 </span>
      </template>
    </el-page-header>
  </div>
  <div class="center">
    <div class="left" v-if="detailpage.length">
    <div class="title"><h3>{{ detailpage[0].title }}</h3></div>
    <div class="text" v-html="detailpage[0].text">
    </div>
  </div>
  <div class="right"><message /></div>
  </div>
  <el-backtop :right="100" :bottom="100" />
</template>
<script lang="ts" setup>
import { textcontent } from '~~/store/content'
const store=textcontent()
const route=useRoute()
const router=useRouter()
const detailpage=ref([{title:'',text:''}])
const currentId=route.params.id
const list:any=store.list.filter((item:any)=>{
  return item.id==currentId
})

//利用await去等待异步传输，否则detailpage会直接略过之后请求回来的数据
if(list.length===0){
 await $fetch(`/api/getdetail?id=${route.params.id}`).then(res=>{

  detailpage.value=res
  })
}else{
  detailpage.value=list
}
const goBack = () => {
  // history.back()
  router.push('/')
}
</script>
<style lang="scss" scoped>
.center{
  display: flex;
  position: absolute;

  .left{
    .title{
    font-size:18px;
    text-align: center;
    }
    .text{
    width: 1000px;
    word-wrap:break-word;
    font-size: 18px;
    // text-align: center;
    margin-left: 20px;
    margin-bottom: 10px;
    img{
      width: 100px;
    }
  }
  }
  .right{
    width: 450px;
    height: 500px;
    margin-left:1080px;
    border: 1px solid black;
    position: fixed;
    background-color:pink
  }
}
.top{
  margin-top: 10px;
}
</style>