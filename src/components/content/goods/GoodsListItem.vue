<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImg" alt="">
    <div class="goods-info">
      <p>{{ items.title }}</p>
      <span class="price">{{ items.price }}</span>
      <span class="cfav">{{ items.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    items: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    // 监听点击事件跳转详情页
    itemClick () {
      // this.$router.push({
      //   path: '/detail',
      //   query: {
      //     id: this.items.iid
      //   }
      // })
      this.$router.push('/detail/' + this.items.iid)
    }
  },
  computed: {
    showImg () {
      return this.items.image || this.items.show.img
    }
  }
}
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    text-align: center;
    overflow: hidden;
  }
  .goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .cfav {
  position: relative;
}
.goods-info .cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url(~assets/imgs/common/collect.svg) 0 0/14px 14px;
}
</style>
