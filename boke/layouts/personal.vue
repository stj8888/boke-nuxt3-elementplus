<template>
    <div class="common-layout">
      <el-container>
        <el-main >
          <NuxtPage />
        </el-main>
        <el-footer><foot></foot></el-footer>
      </el-container>
    </div>
  </template>
  <script setup>
  </script>
  <style lang="scss" scoped>
  
  .el-container{
    position: relative;
  }
  .el-header {
    background-color: pink;
    position: fixed;
    width: 100%;
    z-index: 100;  
    // top: 0;
  }
  .el-footer{
    background-color: pink;
    position: absolute;
    width: 100%;
    height: auto;
    border-style: solid;
    bottom: 0px;
    position:fixed;
  }
  .el-main{
    overflow: hidden;
    width: 100%;
    padding: 0;
   margin-bottom: 30px;//跟底部保持距离，能完整显示
  }
  </style>