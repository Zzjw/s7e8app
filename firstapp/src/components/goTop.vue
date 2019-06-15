<template>
  <div class="goTop">
    <img src='../../static/images/shangjiantou.png' v-if="goTopShow" mode="aspectFit" @click="goTop">
  </div>
</template>
<script>
  export default {
    name: 'goTop',
    data () {
      return {
        goTopShow: false
      }
    },
    // 获取滚动条当前位置
    onPageScroll: function (e) {
      // console.log(e)
      if (e.scrollTop > 0) {
        this.goTopShow = true
      } else {
        this.goTopShow = false
      }
    },
    methods: {
      // 回到顶部
      goTop: function (e) { // 一键回到顶部
      // console.log("滚动")
        if (this.goTopShow) {
          wx.pageScrollTo({
            scrollTop: 0
          })
        }
      }
    }
  }
</script>
