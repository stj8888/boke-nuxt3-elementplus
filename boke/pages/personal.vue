<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="300px">
        <el-page-header title="返回主页" @back="goBack" style="position: fixed;">
      <template #content>
        <span class="text-large font-600 mr-3"> 博主个人中心 </span>
      </template>
        </el-page-header>
   <memue-left></memue-left>
        </el-aside>
      <el-main>
        <NuxtPage />
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
const router=useRouter()
definePageMeta({
    layout:'personal'
})
const goBack = () => {
 router.push('/')
}
</script>
<style lang="scss" scoped>
.el-main{
  overflow: hidden;//隐藏滚动条
}
</style>