<template>
  <div class="recoms">
    <div v-for="(item,index) in recommends " :key="index" class="recoms-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecom',
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recoms {
    display: flex;
    text-align: center;
    width: 100%;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recoms-item {
    flex: 1;
  }
  .recoms-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
