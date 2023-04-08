<template>
        <el-row class="tac">
        <el-col :span="24">
        <el-avatar :src="url" :size="56"/>
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="1"
            text-color="#fff"
          >
          <el-menu-item index="1" @click="hande(1)">
              <el-icon><icon-menu /></el-icon>
              <span>我的学习路线</span>
            </el-menu-item>
            <el-menu-item index="2" @click="hande(2)" >
              <el-icon><icon-menu /></el-icon>
              <span>我的校园经历</span>
            </el-menu-item>
            <el-menu-item index="3" @click="hande(3)">
              <el-icon><document /></el-icon>
              <span>我的生活状态</span>
            </el-menu-item>
            <el-menu-item index="4" @click="hande(4)">
              <el-icon><setting /></el-icon>
              <span>给未来的自己</span>
            </el-menu-item>
          </el-menu>
        </el-col>
       </el-row>
</template>
<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  UserFilled
} from '@element-plus/icons-vue'
const url='http://localhost:3000/image/touxiang.png'
const router=useRouter()
const hande=(i:number)=>{
 if(i===1){
  router.push('/personal/center1')
 }else{
  if(i===2){
    router.push('/personal/center2')
  }else{
    if(i===3){router.push('/personal/center3')
  }else{
      router.push('/personal/center4')
    }
    
  }
 }
}
</script>
<style lang="scss" scoped>
.img1{
  img{
    width: 100%;
    height: 100%;
  }
}
.el-row{
  position: fixed;
  width:200px;
  margin-top: 40px;
}
.el-avatar{
  margin-left: 80px;
}
.el-menu{
    height: 1050px;
    .el-menu-item{
        margin-bottom: 110px;
    }
}
</style>
