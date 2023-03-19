<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recom :recommends="recommends"></home-recom>
    <home-feature/>
    <tab-control :options="['流行','新款','精选']" @tabClick="tabClick"/>
    <goods-list :goods="showGoods"/>
  </div>
</template>

<script lang="js">
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'

import HomeSwiper from 'views/home/childComps/HomeSwiper.vue'
import HomeRecom from 'views/home/childComps/HomeRecom.vue'
import HomeFeature from 'views/home/childComps/HomeFeature.vue'

import { getHomeMultidata, getHomeGoods } from 'network/home.js'

export default {

  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecom,
    HomeFeature,
    TabControl,
    GoodsList

  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      goodsArr: ['pop', 'new', 'sell']
    }
  },
  created () {
    // 请求首页multidata数据
    this.getHomeMultidataMethods()
    // 请求首页商品数据
    this.getHomeGoodsMethods('pop')
    this.getHomeGoodsMethods('new')
    this.getHomeGoodsMethods('sell')
  },
  methods: {
    /**
     * 网络请求相关方法
     */
    // 请求首页multidata数据
    getHomeMultidataMethods () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    // 请求首页商品数据
    getHomeGoodsMethods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        console.log(res)
      })
    },
    /**
     * 事件监听相关方法
     */
    // tabControl点击事件
    tabClick (index) {
      this.currentType = this.goodsArr[index]
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
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
