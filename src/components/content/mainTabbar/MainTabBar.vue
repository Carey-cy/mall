<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" >
        <img src="~assets/imgs/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <img src="~assets/imgs/tabbar/home.svg" alt="" slot="item-icon">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="~assets/imgs/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <img src="~assets/imgs/tabbar/category.svg" alt="" slot="item-icon">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img src="~assets/imgs/tabbar/shopcart_active.svg" alt="" slot="item-icon-active">
        <img src="~assets/imgs/tabbar/shopcart.svg" alt="" slot="item-icon">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile">
        <img src="~assets/imgs/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <img src="~assets/imgs/tabbar/profile.svg" alt="" slot="item-icon">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
