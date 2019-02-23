<template>
  <div class="chart">
    <button @click="send">点我</button>
    <div id="myChart" :style="{width: '600px', height: '400px'}"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [5, 20, 36, 10, 10, 20]
    }
  },
  created () {
    this.getList()
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 指定图表的配置项和数据
      var option = {
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: this.list
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    send () {
      this.axios.post('/api/history', {
        list: this.list
      })
    },
    update () {
    },
    getList () {
      this.axios.get('/api/data').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }

  }
}
</script>

<style scoped>

</style>
