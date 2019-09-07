<template>
  <div id="app">
    <router-view/>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" src="../static/img/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="Member">
        <img slot="icon" src="../static/img/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="Shopcart">
        <img slot="icon" src="../static/img/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="Search">
        <img slot="icon" src="../static/img/find.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: 'Home'
    }
  },
  watch: {
    selected: function(newV,oldV) {
      this.$router.push({
        name: newV
      })
    }
  }
}
</script>

<style scoped>
.mint-tabbar {
  position: fixed;
}
</style>
