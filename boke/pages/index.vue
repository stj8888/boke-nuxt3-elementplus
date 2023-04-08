<template>
  <div class="center">
    <div>
      <el-card class="box-card" v-for="i in list" :key="i.id">
        <template #header>
          <div class="card-header" @click="detail(i)">
            <h3>{{ i.title }}</h3>
          </div>
        </template>
        <div class="text item">
          <img :src="`http://localhost:3000${i.avatar}`" alt="" @click="detail(i)" />
        </div>
      </el-card>
      <div style="height: 100px;margin-left: 80px;">
         <el-pagination background layout="prev, pager, next" :total="count" :page-size="3" @current-change="chage"/></div>
    </div>
    <div class="right">
      <Button></Button>
    </div>
  </div>
</template>
<script  setup>
import Button from '@/components/animal/button'
import { textcontent } from '~~/store/content'
const store = textcontent()
const router = useRouter()
const state = useFoo
const chage=(val)=>{
  $fetch(`/api/getpage?id=${val}`,{
  method:'GET'
}).then((res) => {
  // list.value = res.list.slice(0, 3)
  // state.value = res.list.slice(0, 3)
  // store.store(res.list.slice(0, 3))
  list.value=res.list
  store.store(res.list)
  count.value=res.count
})
}
const list = ref([])
definePageMeta({
    layout:'default'
})
const count=ref('1')
const data = await $fetch('/api/getpage?id=1',{
  method:'GET'
}).then((res) => {
  // list.value = res.list.slice(0, 3)
  // state.value = res.list.slice(0, 3)
  // store.store(res.list.slice(0, 3))
  list.value=res.list
  store.store(res.list)
  count.value=res.count
})
const detail = (i) => {
  router.push(`/node/${i.id}`)
}
</script>
<style lang="scss" scoped>
.center {
  display: flex;
  background-image: url(../assets/pohotos/01.jfif);
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    cursor: pointer;
  }
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
  img {
    width: 100%;
    height: 300px;
    cursor: pointer;
  }
}

.box-card {
  width: 580px;
  margin-top: 10px;
}
.right {
  margin-left: auto;
}
</style>