<template>
    <div id="main" ref="main" style="width:1000px; height:1000px"></div>
</template>
<script lang="ts"  setup>
const instance: any = getCurrentInstance()
const echarts = instance.appContext.config.globalProperties.$echarts
//如果要用到document和windows的话，我们需要通过process.client去判断，因为服务端没有这两个元素

onMounted(()=>{
  //因为每一次进入当前页面需要初始化echarts,所以获取元素就需要每次获取
  if(process.client){var main=document.getElementById('main')} 
var myChart = echarts.init(main!);
var option;

option = {
  title:{
    text:'人生需要奋斗',
    x:'left'
  },
  legend:{
 x:'center',
 data:['人生马达']
  },
  series: [
    {
      name:'人生马达',
      type: 'gauge',
      axisLine: {
        lineStyle: {
          width: 30,
          color: [
            [0.3, '#67e0e3'],
            [0.7, '#37a2da'],
            [1, '#fd666d']
          ]
        }
      },
      pointer: {
        itemStyle: {
          color: 'inherit'
        }
      },
      axisTick: {
        distance: -30,
        length: 8,
        lineStyle: {
          color: '#fff',
          width: 2
        }
      },
      splitLine: {
        distance: -30,
        length: 30,
        lineStyle: {
          color: '#fff',
          width: 4
        }
      },
      axisLabel: {
        color: 'inherit',
        distance: 40,
        fontSize: 20
      },
      detail: {
        valueAnimation: true,
        formatter: '{value} km/h',
        color: 'inherit'
      },
      data: [
        {
          value: 70
        }
      ]
    }
  ]
};
setInterval(function () {
  myChart.setOption({
    series: [
      {
        data: [
          {
            value: +(Math.random() * 100).toFixed(2)
          }
        ]
      }
    ]
  });
}, 2000);

option && myChart.setOption(option);
})
</script>
<style lang="scss" scoped>

</style>