<template>
  <div id="detail">
    <detail-nav class="detail-nav"></detail-nav>
    <scroll class="content">
      <detail-swiper :topImg="topImages"></detail-swiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
    </scroll>
  </div>
</template>

<script>
import DetailNav from './childComps/DetailNav.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'

import { getDetails, Goods, Shop } from 'network/detail.js'

import Scroll from 'components/common/scroll/Scroll.vue'

export default {
  name: 'Detail',
  data () {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {}
    }
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  created () {
    this.id = this.$route.params.iid
    // 请求详情页对应数据
    getDetails(this.id).then(res => {
      console.log(res)
      const data = res.result
      // 获取轮播图数据
      this.topImages = data.itemInfo.topImages
      // 获取商品信息数据
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo)
    })
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
