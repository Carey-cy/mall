<template>
  <mt-swipe>
    <mt-swipe-item  :auto="3000" v-for="(item,index) in topImg" :key="index">
        <img :src="item" alt="">
     </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  name: 'DetailSwiper',
  props: {
    topImg: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
  img {
    width: 100%;
  }
  .mint-swipe {
    height: 300px;
    overflow: hidden;
  }
</style>
