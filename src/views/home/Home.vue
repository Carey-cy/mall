<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :options="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" v-show="isFixed"/>
    <div class="observe-dom-container">
      <scroll
    class="home-content"
    ref="scroll"
    :probe-type="3"
    :pull-up-load="true"
    @scroll="contentScroll"
    @pullingUp="pullingUp">
      <home-swiper :banners="banners" @imgLoad="imgLoad"></home-swiper>
      <home-recom :recommends="recommends"></home-recom>
      <home-feature/>
      <tab-control :options="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    </div>
    <back-top  @click.native="backClick" v-show="isShow"/>
  </div>
</template>

<script lang="js">
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

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
    GoodsList,
    Scroll,
    BackTop
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
      goodsArr: ['pop', 'new', 'sell'],
      isShow: false,
      tabOffsetTop: 0,
      isFixed: false,
      saveY: 0
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
        // 可以再一次下拉加载
        this.$refs.scroll.finishPullUp()
      })
    },
    /**
     * 事件监听相关方法
     */
    // tabControl点击事件
    tabClick (index) {
      this.currentType = this.goodsArr[index]
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
      this.$refs.scroll.scrollTo(0, -this.tabOffsetTop, 500)
    },
    // back-top点击事件
    backClick () {
      console.log(2)
      this.$refs.scroll.scrollTo(0, 0)
    },
    // 滚动事件
    contentScroll (position) {
      // 1.判断滚动高度来使back-top出现或隐藏
      this.isShow = -position.y > 1000
      // 2.判断滚动是否到了tabControl吸顶位置
      this.isFixed = -position.y > this.tabOffsetTop
    },
    // 上拉加载更多
    pullingUp () {
      this.getHomeGoodsMethods(this.currentType)
    },
    // 监听轮播图里图片加载完成
    imgLoad () {
      // 获取tabcontrol的offsetTop赋值给变量
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  activated () {
    // 重新进入首页后迅速滚到上次的位置
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    // 重新刷新一下
    this.$refs.scroll.refresh()
    console.log('activated')
  },
  deactivated () {
    this.saveY = this.$refs.scroll.getScrollY()
    console.log('deactived')
  }
}

</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    position: relative;
    height: 100%;
  }
  .home-nav {
    color: #fff;
    background-color: var(--color-tint);
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
  .home-content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    /* height: calc(100% - 93px); */
    overflow: hidden;
  }
</style>
