<template>
<div>
  <div id="main"></div> 
</div>
</template>

<script>
import * as echarts from 'echarts'
import {newDate, value1, value2, avg1, avg2} from '../assets/config'
export default {
  name: "Bar",
  mounted() {
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      var bar = document.getElementById("main");

      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          data: ['新增确诊', '疫苗接种', '平均7天(确诊)', '平均7天(接种)'],
        },
        xAxis: [{
          type: 'category',
          data: newDate,
          axisPointer: {
            type: 'shadow'
          }
        }],
        yAxis: [{
          type: 'value',
          name: '新增确诊/人',
          min: 0,
          max: 150,
          interval: 30,
          axisLabel: {
            formatter: '{value}'
          }
        },
        {
          type: 'value',
          name: '疫苗接种/万人',
          min: 1000000,
          max: 26000000,
          interval: 5000000,
          axisLabel: {
            formatter: value => value/10000
          }
        }],
        series: [
          {
            name: '新增确诊',
            type: 'bar',
            data: value1,
            yAxisIndex: 0
          },
          {
            name: '平均7天(确诊)',
            type: 'line',
            yAxisIndex: 0,
            data: avg1
          },
          {
            name: '疫苗接种',
            type: 'bar',
            yAxisIndex: 1,
            data: value2   
          },
          {
            name: '平均7天(接种)',
            type: 'line',
            yAxisIndex: 1,
            data: avg2
          }
        ],
        grid: {
		      left: '3%',
		      right: '4%',
		      bottom: '10%',
          top: "20%",
	        containLabel: true
		    },
        title: {
          // text: "近一月新冠肺炎确诊人数",
          top: "top",
          left: "center",
          textStyle: {
            fontSize: 30,
            fontWeight: 'bolder',
            color: 'rgba(28,28,28, 0.5)'
          },
        }
      }
      echarts.init(bar).setOption(option)
    }
  }
}
</script>

<style>
#main {
  height: 400px;
  width: 600px;
}
button {
  background-color: #fff;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-right: 5px;
  cursor: pointer;
  position: relative;
  /* top: 100px; */
  /* right: -400px; */
}
.active {
  background-color: rgb(119, 182, 241);
}
</style>