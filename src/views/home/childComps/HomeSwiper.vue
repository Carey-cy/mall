<template>
  <mt-swipe>
    <mt-swipe-item  :auto="3000" v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
        <img :src="item.image" alt="">
        </a>
     </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
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
  mt-swipe {
    height: 150px;
  }
</style>
