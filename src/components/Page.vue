<template>
  <div id="map">
    
  </div>
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts'
import '../assets/china'
import { data } from '../assets/config'
export default {
  name: "Page",
  mounted() {
    this.echartsInit()
  },
  methods: {
    echartsInit() {
      var map = document.getElementById("map");

      var all = {
        options: [{
          visualMap: {
            type: "piecewise",
            pieces: [
              {gt: 900, color: "#9a0808"},  
              {gt: 700, lte: 900, color: "#ce0b0b"},   
              {gt: 500, lte: 700, color: "#d50b0b"},
              {gt: 300, lte: 500, color:"#ef5846"},
              {gt: 200, lte: 300, color: "#f05846"},  
              {gt: 100, lte: 200, color:"#f37567"}, 
              {gt: 50, lte: 100, color:"#f7c6b2"},
              {gt: 20, lte: 50, color:"#fcc8b4"},
              {gt: 1, lte: 20, color:"#ffe5db"},
              {lt: 1, color: "#fff"}                 
            ],
            
            /* min: 0,
            max: 1000, */
            itemHeight: 10,
            itemWidth: 10,
            left: 50,
            top: 400,
            calculable: true
          },
          tooltip: {
            show: true
          },
          series: [{
            center: ["15%","30%"],
            data: data,
            label: {
              emphasis: {
                show: true
              },
              normal: {
                show: true
              }
            },
            name: "确诊人数",
            mapType: "china",
            roam: true,
            type: "map"
          },
          /* {
            "name": "确诊人数",
            "type": "pie",
            "data": data,
             radius: [30, 80],
            center: ["80%","85%"]
          } */],
          title: {
            text: "2021年8月11日新冠肺炎分布图"
          }
        }],
      };

      var option = {
        baseOption: {
          timeline: {          
            center: "0%",
            width: 0,
            height: null,
            loop: false,
            label: {              
              emphasis: {
                textStyle: {
                  color: '#CD3700'
                }
              }
            },
            data: all.years
          },

          title: {
            left: 'center',
            top: "5%",
            subtext: '',
            textStyle: {
              fontSize: 30,
              fontWeight: 'bolder',
              color: 'rgba(28,28,28, 0.5)'
            }
          },   

          series: [],
          animationDurationUpdate: 1000,
          animationEasingUpdate: 'quinticInOut'
        },
        options: all.options
      };

      echarts.init(map).setOption(option)
    }
  }		  
}
</script>

<style>
#map {
  height: 700px;
  width: 800px;
}
</style>