<template>
  <div>{{list}}</div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      index: 0
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.axios.get('http://localhost:3003/history').then(res => {
        let {data} = res
        // data.forEach((item, index) => {
        //   this.list.push(item.data)
        // })
        for (var i = data.length - 1; i >= 0 && i < 10; i--) {
          this.list.push(data[i].data)
        }
      })
    }
  }
}
</script>

<style>

</style>
