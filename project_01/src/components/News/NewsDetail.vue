<template>
  <div class="tmpl">
    <nav-bar title="新闻详情"/>

    <div class="news-title">
      <p>{{ newsInfo.title }}</p>
      <div>
        <span>{{ newsInfo.pageview }}次阅读</span>
        <span>{{ newsInfo.add_time }}</span>
      </div>
    </div>
    <div class="news-content" v-html="newsInfo.content"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        newsInfo: {}
      }
    },
    created () {
      let _id = this.$route.params.id
      let message = []
      this.$axios.get('/getnewsdetail.json')
      .then(res => {
        message = res.data.message
        message.forEach( (val, index, arr) => {
          if (_id === val.id) {  
            this.newsInfo = arr[index]
            return
          }
        })
      })
      .catch(err => console.log(err))
    }
  }
</script>
<style scoped>
  .news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
  }
  .news-title span {
    margin-right: 30px;
  }
  .news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .news-content {
    padding: 10 5;
  }
</style>
