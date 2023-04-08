<template>
  <div class="main">
    <h1>请先登录</h1>
    <div style="margin-top: 250px">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
        style="max-width: 460px"
      >
        <el-form-item label="用户名" prop="user">
          <el-input v-model="ruleForm.user" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">清空</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  <script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
definePageMeta({
  layout: 'login',
})
const router=useRouter()
const ruleFormRef = ref<FormInstance>()

const validateuser = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else {
    if (ruleForm.user !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}
const ruleForm = reactive({
  user: '',
  password: '',
})
const rules = reactive<FormRules>({
  user: [{ validator: validateuser, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      $fetch('/api/login', {
        method: 'post',
        body: { user: ruleForm.user, password: ruleForm.password }
      }).then((res:any) => {
        if (res.ok) {
          ElMessage({
            message: '登录成功',
            type: 'success',
          })
        router.push('/webserver/updatetext')
        }
        // const headers =getHeader(res,'a')
        localStorage.setItem('token',res.token)
      }).catch(e=>{
        ElMessage({message:'用户名或密码错误',type:'error'})
      })
    } else {
      return false
    }
  })
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
  <style lang="scss" scoped>
.el-form {
  margin-left: 550px;
}
.main {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: pink;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>