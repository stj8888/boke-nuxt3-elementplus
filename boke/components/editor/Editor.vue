<template>
  <ClientOnly>
    <div style="border: 3px solid #ccc">
        <Toolbar
              style="height: 150px;border-bottom: 1px solid #ccc"
              :editor="editorRef"
              :defaultConfig="toolbarConfig"
              :mode="mode"
            />
            <Editor
              style="height: 300px; overflow-y: hidden;width: 500px;"
              v-model="valueHtml"
              :defaultConfig="editorConfig"
              :mode="mode"
              @onCreated="handleCreated"
              @onChange="handleChange"
            />
    </div>
  </ClientOnly>
</template>
<script lang="ts" setup >
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
const props=defineProps({
  text:String
})

const emit=defineEmits(['change'])
// 编辑器实例，必须用 shallowRef
  const editorRef = shallowRef()
  const mode='default'
// 内容 HTML
 const valueHtml:any = ref('')
 valueHtml.value = props.text
// 模拟 ajax 异步获取内容
const isClient=ref(false)

type InsertFnType = (url: string, alt: string, href: string) => void
const toolbarConfig = {}
const editorConfig:any = { 
  MENU_CONF:{},
  placeholder: '请输入内容',
}
editorConfig.MENU_CONF['uploadImage'] = {
     server: '/api/upload',
}
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor:any) => {
  editorRef.value = editor // 记录 editor 实例，重要！

}
const handleChange = (editor:any) => { 

emit('change',valueHtml.value)
}
</script> 
