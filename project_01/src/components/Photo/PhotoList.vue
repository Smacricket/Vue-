<template>
  <div class="tmpl">
    <nav-bar title="图文分享"/>
    
    <div class="photo-header">
      <ul>
        <li v-model="selected" v-for="category in categories" :key="category.id">
          <a href="javascript:;"">{{ category.title }}</a>
        </li>
      </ul>
    </div>

    <div class="photo-list">
      <ul>
        <li v-for="img in imgs" :key="img.id">
          <router-link :to="{ name: 'PhotoDetail', params: { id:img.id } }">
            <img :src="img.img_url">
            <p>
              <span>{{ img.title }}</span>
              <br>
              <span>{{ img.summary }}</span>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        categories: [],
        imgs: [],
        selected: 0
      }
    },
    created () {
      this.$axios.get('/getimages.json')
      .then(res => {
        this.imgs = res.data.message
      })
      .catch(err => console.log(err))

      this.$axios.get('/getimgcategory.json')
      .then(res => {
        this.categories = res.data.message
        this.categories.unshift({id:0,title:'全部'})
      })
      .catch(err => console.log(err))
    }
  }
</script>
<style>
.photo-header li {
  list-style: none;
  display: inline-block;
  margin-left: 10px;
  height: 30px;
}
.photo-header ul {
  /*强制不换行*/
  white-space: nowrap;
  overflow-x: auto;
  padding-left: 0px;
  margin: 5px 5px 0 0;
}

.photo-list li {
  list-style: none;
  position: relative;
  margin-bottom: 5px;
}
.photo-list li img {
  width: 100%;
  height: 230px;
  vertical-align: top;
}
.photo-list ul {
  padding-left: 0px;
  margin: 0;
}
.photo-list p {
  position: absolute;
  width: 100%;
  bottom: 0px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 0px;
  text-align: center;
}
.photo-list p span:nth-child(1) {
  font-weight: bold;
  font-size: 16px;
}

</style>
