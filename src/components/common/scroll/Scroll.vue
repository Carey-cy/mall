<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data () {
    return {
      bscroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    // 1.创建BScroll对象
    this.bscroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      movable: true,
      zoom: true,
      observeDOM: true,
      observeImage: true
    })
    // 2.监听滚动位置：前提Probetype是3or2
    if (this.probeType === 2 || this.probeType === 3) {
      this.bscroll.on('scroll', (position) => {
      // console.log(position)
      this.$emit('scroll', position)
    })
    }
    // 3.上拉加载更多
    if (this.pullUpLoad) {
      this.bscroll.on('pullingUp', () => {
      // console.log('上拉加载更多')
      this.$emit('pullingUp')
    })
    }
  },
  methods: {
    scrollTo (x, y, time = 300) {
      this.bscroll && this.bscroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.bscroll && this.bscroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>
