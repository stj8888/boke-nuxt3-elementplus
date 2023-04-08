<template>
<el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  :router="true"
  @select="handleSelect"
>
  <el-menu-item index="/webserver/updatetext">编辑博客</el-menu-item>
  <el-menu-item index="/webserver/revisetext">管理博客</el-menu-item>
  <el-menu-item index="/webserver/personCenter">网友留言</el-menu-item>
</el-menu>
<NuxtPage></NuxtPage>
</template>
<script lang="ts" setup>
const route=useRoute()
definePageMeta({
  layout: 'login',
  middleware:'auth'
})
const activeIndex = ref(route.fullPath)
watch(route,()=>{
  activeIndex.value=route.fullPath
})
const handleSelect = (key: string, keyPath: string[]) => {
}
</script>