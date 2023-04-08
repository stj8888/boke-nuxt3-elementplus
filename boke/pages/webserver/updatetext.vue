<template>
  <div class="main">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
      style="max-width: 460px"
    >
      <el-form-item label="标题：" prop="title">
        <el-input v-model="ruleForm.title" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="正文：" prop="text">
        <Editor @change="edit"></Editor>
      </el-form-item>
      <el-form-item label="背景封面：" prop="avatar">
        <EditorUploadimage       
        :userFormAvatar="ruleForm.avatar"
        :uploadAvatar="ruleForm.avatar"
        @handleChange="handleChange"></EditorUploadimage>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >上传</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  <script lang="ts" setup>
  import type { FormInstance, FormRules } from 'element-plus'
  import upload from '@/utils/upload'
  const ruleFormRef = ref<FormInstance>()
    const router=useRouter()
    const validatetitle = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入标题'))
  } else {
    if (ruleForm.title!== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatetext=(rule: any, value: any, callback: any) => {
  if (ruleForm.text==='') {
    callback(new Error('请输入内容'))
  } else {
    callback()
  }
}
const validateavatar=(rule:any,value:any,callback:any)=>{
if(ruleForm.avatar!==''){
  callback()
}else{
  callback(new Error('请插入背景图'))
}
}
  const ruleForm = reactive({
  title:'',
  text:'',
  avatar:'',
  file:null,
  editTime:""
  })
  
  const rules = reactive<FormRules>({
    title: [{ validator: validatetitle, trigger: 'blur' }],
    text: [{ validator: validatetext, trigger: 'blur' }],
    avatar: [{ validator: validateavatar, trigger: 'blur' }]
  })
  
  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
       ruleForm.editTime=String(new Date())
        upload('/api/uploadfile',ruleForm).then(res=>{
          ElMessage({message:'上传成功',type:'success'})
        })
        router.push('/webserver/revisetext')
      } else {
        return false
      }
    })
  }
  
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  //接受Edit传来的数据
  const edit=(data:any)=>{
  ruleForm.text=data
  }
  //上传的背景图片
  const handleChange = (file:any) => {
    ruleForm.avatar = URL.createObjectURL(file)
    ruleForm.file = file
}
  </script>
  <style lang="scss" scoped>
.main {
  margin-left: 500px;
  margin-top: 50px;
}
</style>
