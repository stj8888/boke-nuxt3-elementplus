<template>
  <EditorEditorboke
    v-if="show"
    :data="currentdata"
    @show="isshow"
  ></EditorEditorboke>
  <el-table :data="tableData" style="width: 100%" v-else>
    <el-table-column label="时间" width="580">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{
            moment(scope.row.editTime).format('YYYY年 MM月 DD日 HH点MM分ss秒')
          }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="标题" width="580">
      <template #default="scope">
        <el-tag>{{ scope.row.title }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-popconfirm
          title="你确认删除吗？"
          confirm-button-text="确认"
          cancel-button-text="取消"
          @confirm="handleDelete(scope.$index, scope.row)"
        >
          <template #reference>
            <el-button
              size="large"
              :icon="Delete"
              type="danger"
              circle
            ></el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>
  <script lang="ts" setup>
import moment from 'moment'
import { Timer, Delete } from '@element-plus/icons-vue'
const show = ref(false)
const currentdata = ref({})
const currentindex = ref(1)
const handleEdit = (index: number, row: any) => {
  currentindex.value = index
  currentdata.value = row
  show.value = true
}
const handleDelete = (index: number, row: any) => {
  $fetch(`/api/deletetext?id=${row.id}`).then((res) => {
    getdata()
  })
}

const tableData = ref([{}])
onMounted(() => {
  getdata()
})
const getdata = () => {
  $fetch('/api/getpage').then((res) => {
    tableData.value = res
  })
}
const isshow = async (data: any) => {
  if (data) {
    await $fetch(`/api/getdetail?id=${data}`).then((res) => {
      //通过watch监听tabledata,能立即更新
      watch(
        tableData,
        () => {
          tableData.value[currentindex.value] = res[0]
        },
        { immediate: true }
      )
    })
  }
  show.value = false
}
</script>