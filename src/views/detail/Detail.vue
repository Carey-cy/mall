<template>
  <div id="detail">
    <detail-nav class="detail-nav" @itemClick="navClick"></detail-nav>
    <div class="observe-dom-container">
      <scroll class="content" ref="scroll">
        <detail-swiper :top-img="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :detail-info="detailInfo"/>
        <detail-param-info ref="params" :param-info="paramInfo"/>
        <detail-comment-info :comment-info="commentInfo" ref="comment"/>
        <goods-list :goods="recommend" ref="recomend"/>
      </scroll>
    </div>
  </div>
</template>

<script>
import { getDetails, Goods, Shop, GoodsParam, getRecommend } from 'network/detail.js'

import Scroll from 'components/common/scroll/Scroll.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'

import DetailNav from './childComps/DetailNav.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'

export default {
  name: 'Detail',
  data () {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeY: [0, 1000, 3000]
    }
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList
  },
  created () {
    this.id = this.$route.params.iid
    // 请求详情页对应数据
    getDetails(this.id).then(res => {
      console.log(res)
      const data = res.result
      // 1.获取轮播图数据
      this.topImages = data.itemInfo.topImages
      // 2.获取商品信息数据
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 3.获取店铺信息
      this.shop = new Shop(data.shopInfo)
      // 4.获取商品详细的信息
      this.detailInfo = data.detailInfo
      // 5.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 6.获取评论数据
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0]
      }
    })
    // 请求推荐数据
    getRecommend().then(res => {
      this.recommend = res.data.list
    })
  },
  methods: {
    navClick (index) {
      this.$refs.scroll.scrollTo(0, -this.themeY[index], 300)
    }
  },
  updated () {
    this.themeY = []
    this.themeY.push(0)
    this.themeY.push(this.$refs.params.$el.offsetTop)
    this.themeY.push(this.$refs.comment.$el.offsetTop)
    this.themeY.push(this.$refs.recomend.$el.offsetTop)
    // console.log(this.themeY)
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px);
    overflow: hidden;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>
