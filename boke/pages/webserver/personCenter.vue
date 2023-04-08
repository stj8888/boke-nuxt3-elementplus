<template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="留言时间" >
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{
              moment(scope.row.editTime).format('YYYY年 MM月 DD日 HH点MM分ss秒')
            }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="网友姓名" >
        <template #default="scope">
          <el-tag>{{ scope.row.name }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="留言内容" >
        <template #default="scope">
          <el-tag>{{ scope.row.message }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="留言方式">
        <template #default="scope">
          <el-tag>{{ scope.row.list }}:  {{ scope.row.contact }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
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
  const currentdata = ref({})
  const currentindex = ref(1)
  const handleDelete = (index: number, row: any) => {
    $fetch(`/api/deletegust?id=${row.id}`).then((res) => {
      getdata()
    })
  }
  const tableData = ref([{}])
  onMounted(() => {
    getdata()
  })
  const getdata = () => {
    $fetch('/api/getgust').then((res) => {
      tableData.value = res
    })
  }
  </script>