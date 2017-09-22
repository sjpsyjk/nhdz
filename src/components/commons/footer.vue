<template>
  <div id="foot">
    <router-link v-for="(item,index) in nav" :key="item.title" :to="item.url" tag="span" @click.native="showOn(index)">
      <img :src="item.icon" alt="" v-show="item.checked" :class="item.only ? 'img' : ''">
      <img :src="item.iconOn" alt="" v-show="!item.checked">
      <br>
      <span v-show="!item.only">{{item.title}}</span>
    </router-link>
  </div>
</template>

<script>
  export default{
    mounted () {
      // let pathArr = this.$route.path.split('/')
      for (let i in this.nav) {
        if (this.$route.path.indexOf(this.nav[i].name) === 1) {
          this.nav[i].checked = true
        } else {
          this.nav[i].checked = false
          this.nav[2].checked = true
        }
      }
    },
    methods: {
      showOn (index) {
        if (!this.nav[index].only) {
          for (let i in this.nav) {
            this.nav[i].checked = false
          }
          this.nav[index].checked = true
          this.nav[2].checked = true
        }
      }
    },
    data () {
      return {
        nav: [
          {name: 'index', title: '首页', icon: require('../../assets/svg/homepage.svg'), iconOn: require('../../assets/svg/homepage_fill.svg'), url: '/', checked: true},
          {name: 'friendsShow', title: '段友秀', icon: require('../../assets/svg/workbench.svg'), iconOn: require('../../assets/svg/workbench_fill.svg'), url: '/friendsShow', checked: false},
          {title: '+', icon: require('../../assets/svg/add.svg'), url: '', checked: true, only: true},
          {name: 'find', title: '发现', icon: require('../../assets/svg/search.svg'), iconOn: require('../../assets/svg/search fill.svg'), url: '/find', checked: false},
          {name: 'me', title: '我的', icon: require('../../assets/svg/people.svg'), iconOn: require('../../assets/svg/people_fill.svg'), url: '/me', checked: false}
        ]
      }
    }
  }
</script>

<style scoped>
  #foot{
    display: flex;
    position: fixed;
    justify-content: space-around;
    bottom:0;
    align-items: center;
    font-size: .34rem;
    text-align: center;
    background: #eee;
    padding: .2rem;
    width: 100%;
  }
/*  .foot_in{
    position: fixed;
    bottom:0;
    display: flex;
    justify-content: space-around;
  }*/
  #foot p{
    display: flex;
  }
  .img{
    background: #ED7398;
  }
  img{
    width: .5rem;
  }
</style>