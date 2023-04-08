
<template>
  <div class="search">
    <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    :trigger-on-focus="false"
    placeholder="搜索你想搜的东西"
    value-key="title"
    :clearable="true"
     @select="handleSelect"
  >
  <template #suffix>
      <el-icon class="el-input__icon" @click="search(data,state)">
       <el-icon :size="30"><Search /></el-icon>
      </el-icon>
    </template>
</el-autocomplete>
  </div>

</template>
  <script lang="ts" setup>
  import { Search } from '@element-plus/icons-vue'
  //搜索
  const search=(data:any,item:any)=>{
   for(var i=0 ; i<data.length;i++){
    if(data[i].title===item){
     router.push(`/node/${data[i].id}`)
    }
   }
  }
const state = ref('')
interface LinkItem {
  title: string
  link: string
}
const links = ref<LinkItem[]>([])
const data=ref([])
const loadAll = async() => {
   await $fetch('/api/getpage').then(res=>{
    data.value=res
  })
  return data.value
}
let timeout: NodeJS.Timeout
const querySearchAsync = (queryString: string, callback: (title: any) => void) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value=[]
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    if(results.length!==0){
     callback(results)
    }else{
     const empty=[{title:'空空如也,换个关键词搜索吧'}]
     callback(empty)
    }
  }, 1000 * Math.random())
}
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.title?.toLowerCase().indexOf(queryString?.toLowerCase()) >=0
    )
    // return true
  }
}
const router=useRouter()
const handleSelect = (item: any) => {

  if(item.title=='空空如也,换个关键词搜索吧'){
    return
  }else{
    router.push(`/node/${item.id}`)
  }
  
}

onMounted(async() => {
  links.value =await loadAll()
})
</script>
<style lang="scss" scoped >
:deep(.el-input__inner){
  width: 250px;
  height: 50px;
}
.search{
   width: 200px;
   height: 100px;
   margin: 0px 0 0 300px;
}

</style>