<template>
  <div id="detail">
    <detail-nav></detail-nav>
    <detail-swiper :topImg="topImages"></detail-swiper>
    <detail-base-info :goods="goods"/>
  </div>
</template>

<script>
import DetailNav from 'views/detail/childComps/DetailNav.vue'
import DetailSwiper from 'views/detail/childComps/DetailSwiper.vue'
import DetailBaseInfo from 'views/detail/childComps/DetailBaseInfo.vue'

import { getDetails, Goods } from 'network/detail.js'
export default {
  name: 'Detail',
  data () {
    return {
      id: null,
      topImages: [],
      goods: null
    }
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo
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
    })
  }
}
</script>

<style scoped>

</style>
