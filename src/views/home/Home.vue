<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recom :recommends="recommends"></home-recom>
    <home-feature/>
    <tab-control :options="['流行','新款','精选']"/>
    <ul>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>dhksdhksh</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
      <li>gshsgshgshs</li>
    </ul>
  </div>
</template>

<script lang="js">
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'

import HomeSwiper from 'views/home/childComps/HomeSwiper.vue'
import HomeRecom from 'views/home/childComps/HomeRecom.vue'
import HomeFeature from 'views/home/childComps/HomeFeature.vue'

import { getHomeMultidata } from 'network/home.js'

export default {

  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecom,
    HomeFeature,
    TabControl

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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  #home {
    padding-top: 44px;
  }
</style>
