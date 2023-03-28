<template>
  <div id="detail">
    <detail-nav class="detail-nav"></detail-nav>
    <div class="observe-dom-container">
      <scroll class="content">
        <detail-swiper :top-img="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :detail-info="detailInfo"/>
      </scroll>
    </div>
  </div>
</template>

<script>
import DetailNav from './childComps/DetailNav.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'

import { getDetails, Goods, Shop } from 'network/detail.js'

import Scroll from 'components/common/scroll/Scroll.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'

export default {
  name: 'Detail',
  data () {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {}
    }
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo
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
