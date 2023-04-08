<template>
  <div class="box">
    <div id="myMap" ref="myMap" style="width: 300px; height: 900px"></div>
    <div class="right" style="margin-left: 100px">
      <h3>前端学习路线图(来自菜鸟驿站)</h3>
      <img src="/pohotos/learn.png" alt="" />
    </div>
  </div>
</template>
<script lang="ts" setup>
const instance: any = getCurrentInstance()
const echarts = instance.appContext.config.globalProperties.$echarts
const myMap = ref<HTMLElement>()
onMounted(() => {
  const myChart = echarts.init(myMap.value!)
  var app={currentIndex:1}
  // 指定图表的配置项和数据
  const option = {
    title: {
      text: '学习的掌握能力',
      subtext: '还在持续更新',
      x: 'left',
    },
    tooltip: {
      textStyle: {
        fontSize: 10,
      },
    },
    legend: {
      x: 'right',
      data: ['学习图'],
      textStyle: {
        //图例文字的样式
        color: '#0b2b5e',
        fontSize: 20,
      },
    },
    dataset:{
   source:[
   ['product', '大一',  '大二', '大三'],
   ['vue2全家桶',0,20,80],
   ['vue3全家桶',0,10,90],
   ['html',30,50,90],
   ['css',30,40,80],
   ['js',40,60,80 ],
   ['node.js',0,60,70]
   ]
    },
    xAxis:{type:'category',name:'在校情况',axisLabel: {
      alignWithLabel: true
      // ...
    }},
    yAxis:{gridIndex:0,name:'掌握程度'},
    grid: {top: '45%',left:'15%'},
    series: [
    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
      {
        name: '学习图',
        type: 'pie',
        radius: '55%',
        center: ['50%', '20%'],
        data: [   
          {value: 90,name: 'vue2全家桶'},
          { value: 90, name: 'vue3全家桶' },
          { value: 99, name: 'html' },
          { value: 98, name: 'css' },
          { value: 98, name: 'js' },
          { value: 78, name: 'node.js' },
        ],

        label: {
       
            overflow: 'none',
            show: true,
            textStyle: {
              fontSize: 10,
            },

        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            fontSize: 10,
          },
          label: {
            show: true,
            textStyle: {
              fontSize: 10,
            },

          },
        },
      },
    ],
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
})
</script>
<style lang="scss" scoped>
.right {
  img {
    width: 100%;
    height: 100%;
  }
}
.box {
  display: flex;
}
</style>