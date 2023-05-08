import BackTop from 'components/content/backTop/BackTop'

export const backTopMixIn = {
  data () {
    return {
      isShow: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick () {
      // console.log(2)
      this.$refs.scroll.scrollTo(0, 0)
    },
    listenShowBackTop (position) {
      this.isShow = Math.abs(position.y) > 1000
    }
  }
}
