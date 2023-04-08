<template>
    <div id="mymap" ref="mymap" style="width: 1000px; height: 1000px;"></div>
</template>
<script lang="ts" setup>
const instance: any = getCurrentInstance()
const echarts = instance.appContext.config.globalProperties.$echarts
const myMap = ref<HTMLElement>()
onMounted(()=>{
    if(process.client){
var chartDom = document.getElementById('mymap');
var myChart = echarts.init(chartDom);
var option;
option = {
  title: [
    {
      text: '生活超甜，需要面对'
    }
  ],
  polar: {
    radius: [30, '80%']
  },
  angleAxis: {
    max: 4,
    startAngle: 75
  },
  radiusAxis: {
    type: 'category',
    data: ['a', 'b', 'c', 'd']
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [2, 1.2, 2.4, 3.6],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle',
      formatter: '{b}: {c}'
    }
  }
};

option && myChart.setOption(option);

}
})

</script>