<template>
  <div class="home">
    <button ><router-link :to="{path: '/chart'}">页面一</router-link></button>
    <button><router-link :to="{path: '/data'}">页面二</router-link></button>
    <button><router-link :to="{path: '/history'}">页面三</router-link></button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
