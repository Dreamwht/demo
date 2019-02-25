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
      this.axios.get('http://localhost:3003/data').then(res => {
        let {data} = res
        this.index = data.length - 1
        this.list = data[this.index].data
      })
    }
  }
}

</script>

<style>

</style>
