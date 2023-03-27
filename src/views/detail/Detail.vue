<template>
  <div id="detail">
    <detail-nav></detail-nav>
  </div>
</template>

<script>
import DetailNav from 'views/detail/childComps/DetailNav.vue'

export default {
  name: 'Detail',
  data () {
    return {
      id: null
    }
  },
  components: {
    DetailNav
  },
  created () {
    this.id = this.$route.params.iid
  }
}
</script>

<style scoped>

</style>
