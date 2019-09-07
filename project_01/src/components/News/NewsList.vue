<template>
  <div class="tmpl">
    <nav-bar title="新闻资讯"/>

    <div class="demo">
      <ul >
        <li v-for="(news, index) in newsList" :key="index">
          <router-link :to="{ name:'NewsDetail', params:{ id: news.id } }">
            <img :src="news.img_url">
            <div >
              <span>{{ news.title }}</span>
              <p>阅读数:{{ news.pageview }}</p>
              <p>{{ news.add_time | timeAgo }}</p>
            </div>
          </router-link>
          <div class="line"></div>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
    export default {
        data () {
            return {
              newsList: []
            }
        },
        created () {
          this.$axios.get('../../static/data/getnewslist.json')
          .then(res => {
            this.newsList = res.data.message
          })
          .catch(err => console.log(err))
        }
    }
</script>
<style scoped>
.demo {
  padding-bottom: 55px;
}
.demo a {
  display: block;
  width: 100%;
  height: 44px;
  color: #000;
  padding: 20px 0px;

  display: flex;
  align-items: center;
}
.demo img {
  float: left;
  width: 42px;
  height: 42px;
  margin: 0px 12px;
}
.demo a div {
  float: left;
  width: 100%;
}
.demo span {
  display: block;
  width: 100%;
  font-size: 16px;
  line-height: 21px;
}
.demo a p {
  float: right;
  color: #0bb0f5;
  font-size: 12px;
  line-height: 21px;
  margin: 5px 10px 5px 5px;
}
.demo p:nth-child(2) {
  float: left;
}
.demo ul {
  margin: 0px;
  padding: 0;
}

.cms-s-header{
  background-color: #f7f7f7;
}

.line {
  margin:0px 0px 7px 16px;
  transform: scaleY(.5);
  border-bottom: 1px solid #c8c7cc;

}

</style>