<template>
  <div class="bottom-bar">
    <div class="bar-left bar-item">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right bar-item">
      <div class="cart">购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar'
}
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    height: 58px;
    background-color: #fff;
    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }
  .bar-item > div {
    flex: 1;
  }
  .bar-left .text {
    font-size: 13px;
  }
  .bar-left .icon {
    display: block;
    height: 22px;
    width: 22px;
    margin:10px auto 3px;
    background: url("~assets/imgs/detail/detail_bottom.png") 0 0/100%;
  }
  .bar-left .service {
    background-position: 0 -54px;
  }
  .bar-left .shop {
    background-position:0 -98px;
  }
  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }
  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }
  .bar-right .buy {
    background-color: #f69;
  }
</style>
