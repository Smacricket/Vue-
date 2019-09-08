<template>
  <div>
    <nav-bar title="图文详情"/>

    <div class="photo-title">
      <p>{{ photoInfo.title }}</p>
      <span>{{ photoInfo.add_time }}</span>
      <span>{{ photoInfo.pageview }}次浏览</span>
    </div>

    <vue-preview :slides="imgs" class="s"></vue-preview>

    <div class="photo-desc">
      <p v-html="photoInfo.content"></p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        photoInfo: {},
        imgs: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]
      }
    }, 
    created () {
      let _id = this.$route.params.id

      this.$axios.get('/getimageInfo.json')
      .then(res => {
        let message = []
        message = res.data.message
        message.forEach( val => {
          if (_id === val.id) {  
            this.photoInfo = val
            return
          }
        })
      })
      .catch(err => console.log(err))

      /*this.$axios.get('/getthumimages.json')
      .then(res => {
        let message = []
        message = res.data.message
        message.forEach( val => {
          while (_id === val.id) {  
            this.imgs.push(val)
            break
          }
          val.msrc = val.src
          val.w = 200
          val.h = 200
        })
      })
      .catch(err => console.log(err))*/
    }
  }
</script>
<style scoped>
.photo-title {
  overflow: hidden;
}
.photo-title,
.photo-desc {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 5px;
  margin-bottom: 5px;
  padding-left: 5px;
}
.photo-title p {
  color: #13c2f7;
  font-size: 20px;
  font-weight: bold;
}
.photo-title span {
  margin-right: 20px;
}
.photo-desc p {
  font-size: 18px;
}

</style>
