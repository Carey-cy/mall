<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recom :recommends="recommends"></home-recom>
  </div>
</template>

<script lang="js">
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from 'views/home/childComps/HomeSwiper.vue'
import HomeRecom from 'views/home/childComps/HomeRecom.vue'
import { getHomeMultidata } from 'network/home.js'

export default {

  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecom

  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created () {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}

</script>

<style scoped>
  .home-nav {
    color: #fff;
    background-color: var(--color-tint);
  }

</style>
