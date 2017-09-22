<template>
  <div id="app">
    <router-view></router-view>
    <!-- <index></index> -->
    <foot></foot>
  </div>
</template>

<script>
import foot from '~/commons/footer'
import defaultFontSize from './rem.js'
// import index from '@/pages/index/index'

export default {
  name: 'app',
  components: {
    foot
    // index
  },
  mounted: function () {
    defaultFontSize
    // this.$ajax({
    //   baseURL: '/api_tj',
    //   url: 'neihan/service/tabs/'
    // }).then(res => {
    //   console.log(res)
    // })
    // this.$ajax({
    //   baseURL: '/api_sp',
    //   url: '/neihan/stream/mix/v1/'
    // }).then(res => {
    //   console.log(res)
    // })
    // this.$ajax({
    //   baseURL: '/api_tp',
    //   url: 'neihan/stream/mix/v1/'
    // }).then(res => {
    //   console.log(res)
    // })
    // this.$ajax({
    //   baseURL: '/api_zb',
    //   url: 'hotsoon/feed/'
    // }).then(res => {
    //   console.log(res)
    // })
  }
}
</script>

<style>
@import url('./normal.css')
  *{
    margin:0;
    padding: 0;
  }
  html {width:100%;-webkit-text-size-adjust:none;/*禁止iphone字体放大*/}
  body{font:62.5%/1 "microsoft yahei",arial,tahoma,\5b8\4f53;width:100%;}
  html::-webkit-scrollbar {display:none}
</style>

