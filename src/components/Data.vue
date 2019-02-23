<template>
  <div>这是data组件</div>
</template>

<script>
export default {
  created () {
    this.axios.get('/api/data?id=1')
  }
}
</script>

<style>

</style>
