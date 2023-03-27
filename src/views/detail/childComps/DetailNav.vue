<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/imgs/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div
        v-for="(item,index) in items"
        :key="index"
        class="title-item"
        @click="itemClick(index)"
        :class="{active: currentIndex === index}">{{ item }}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'DetailNav',
  components: {
    NavBar
  },
  data () {
    return {
      items: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    // 监听navbar中选项的点击事件
    itemClick (index) {
      this.currentIndex = index
    },
    // 监听返回图片的点击事件
    backClick () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .back img {
    margin-top: 10px;
    margin-left: 22px;
  }
</style>
