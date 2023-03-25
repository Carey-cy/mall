<template>
  <mt-swipe>
    <mt-swipe-item  :auto="3000" v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
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
  },
  data () {
    return {
      isLoad: false
    }
  },
  methods: {
    imgLoad () {
      if (!this.isLoad) {
        this.$emit('imgLoad')
        this.isLoad = true
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
    height: 200px;
  }
</style>
