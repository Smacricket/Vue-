<template>
  <div>
    <mt-header fixed title="Vue学习项目"></mt-header>

    <mt-swipe :show-indicators="false">
      <mt-swipe-item v-for="(item, index) in imgs" :key="index">
        <img :src="item.url">
      </mt-swipe-item>
    </mt-swipe>

    <div class="grid">
      <my-ul>
        <my-li v-for="(module, index) in modules" :key="index">
            <router-link :to="module.route">
              <span :class="module.className"></span>
              <div>{{ module.title }}</div>
            </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgs: [],
      modules: [{
        title: '新闻资讯', className: 'back-news', route: { name: 'NewsList' }
      },{
        title: '图文分享', className: 'back-picshare', route: { name: 'PhotoList' }
      },{
        title: '商品展示', className: 'back-goodshow', route: { path:'/' }
      },{
        title: '留言反馈', className: 'back-feedback', route: { path:'/' }
      },{
        title: '搜索资讯', className: 'back-search', route: { path:'/' }
      },{
        title: '联系我们', className: 'back-callme', route: { path:'/' }
      }]
    }
  },
  created () {
    this.$axios.get('/getswipe.json')
    .then( res => {
      this.imgs = res.data.message
    })
    .catch( err => console.log(err) )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe {
    width: 100%;
    height: 200px;
  }
  .mint-swipe img {
    width: 100%;
  }

  .grid span {
    display: inline-block;
    margin: 10px 0;
    width: 50px;
    height: 50px;
    background-repeat: round;
  }
  .back-news {
    background-image: url(../../static/img/news.png);
  }
  .back-picshare {
    background-image: url(../../static/img/picShare.png);
  }
  .back-goodshow {
    background-image: url(../../static/img/goodShow.png);
  }
  .back-feedback {
    background-image: url(../../static/img/feedback.png);
  }
  .back-search {
    background-image: url(../../static/img/search.png);
  }
  .back-callme {
    background-image: url(../../static/img/callme.png);
  }

</style>
