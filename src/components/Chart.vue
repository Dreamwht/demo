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
      list: [],
      index: 0,
      timerId: 0,
      current: 0
    }
  },
  created () {
    this.update()
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
      this.current++
      this.axios.post('http://localhost:3003/history', {
        id: this.current,
        data: this.list
      })
    },
    update () {
      this.getList()
      this.timerId = setInterval(async () => {
        this.index++
        // console.log(this.index)
        if (this.index > 3) {
          clearInterval(this.timerId)
          return false
        }
        let res = await this.axios.get('http://localhost:3003/list?id=' + this.index)
        // console.log(res)
        let {data} = res
        this.list = data[0].data
        this.drawLine()
        try {
          await this.axios.post('http://localhost:3003/data', {
            id: +new Date(),
            data: this.list
          })
        } catch (e) {
          console.log(e)
        }
      }, 1000)
    },
    async getList () {
      try {
        let res = await this.axios.get(' http://localhost:3003/list')
        // console.log(res)
        let {data} = res
        this.list = data[0].data
        this.drawLine()
      } catch (e) {
        console.log(e)
      }
    }

  }
}
</script>

<style scoped>

</style>
