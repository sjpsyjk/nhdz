<template>
  <div class="index">
    <div class="head">
      <ul :style="{marginLeft:'calc('+showNum+' + '+long+')', transition: moveing ? '0s':'all .3s'}" @touchstart="ts" @touchmove="tm" @touchend="te">
        <li v-for="(item,index) in nav"
        :class=" item.checked && 'on' " 
        @click="show(index)"
        > {{item.name}} </li>
      </ul>
    </div>
    <div class="content">
      <joke v-for="item in jokes" :joke="item" ></joke>
    </div>
  </div>
</template>

<script>
  import joke from '~/commons/joke'
  export default {
    components: {
      joke
    },
    mounted () {
      this.$ajax({
        url: 'neihan/stream/mix/v1/',
        baseURL: 'api_sp'
      }).then(req => {
        console.log(req.data.data.data)
        this.jokes = req.data.data.data
      })
    },
    data () {
      return {
        nav: [
          {name: '关注', checked: false, url: 'neihan/dongtai/dongtai_list/v1/', baseURL: 'api_tj'},
          {name: '推荐', checked: true, url: 'neihan/stream/mix/v1/', baseURL: 'api_sp'},
          {name: '视频', checked: false, url: 'neihan/stream/mix/v1/?content_type=-101', baseURL: 'api_tj'},
          {name: '直播', checked: false, url: 'neihan/stream/mix/v1/?content_type=-101', baseURL: 'api_tj'},
          {name: '图片', checked: false, url: 'neihan/stream/mix/v1/?content_type=-101', baseURL: 'api_tj'},
          {name: '段子', checked: false, url: 'neihan/stream/mix/v1/?content_type=-101', baseURL: 'api_tj'},
          {name: '精华', checked: false, url: 'neihan/stream/mix/v1/?content_type=-101', baseURL: 'api_tj'},
          {name: '游戏', checked: false}
        ],
        showNum: '0%',
        long: '0%',
        mouseX: {
          old: '',
          new: ''
        },
        moveing: false,
        jokes: []
      }
    },
    methods: {
      show (index) {
        for (let i in this.nav) {
          this.nav[i].checked = false
        }
        this.nav[index].checked = true
        if (index < 4) {
          this.showNum = (index * -8 + '%')
        } else {
          this.showNum = '-33%'
        }
        this.long = '0%'
      },
      ts (e) {
        this.mouseX.old = e.targetTouches[0].clientX
      },
      tm (e) {
        e.preventDefault()
        this.moveing = true
        this.mouseX.new = e.targetTouches[0].clientX
        let l = (this.mouseX.new - this.mouseX.old) / window.innerWidth * 100 + '%'
        console.log(parseInt(this.showNum) + parseInt(l))
        if (parseInt(this.showNum) + parseInt(l) < 0 && parseInt(this.showNum) + parseInt(l) > -33) {
          this.long = l
        }
      },
      te () {
        this.moveing = false
        this.showNum = parseInt(this.showNum) + parseInt(this.long) + '%'
        this.long = '0%'
      }
    }
  }
</script>
<style scoped>
  *{
    margin:0;
    padding:0;
  }
  .on{
    color:#000;
    font-weight: bold;
    border-bottom: .05rem solid #ED7398;
  }
  .head{
    overflow: hidden;
    background: #eee;
    position: fixed;
    top:0;
    width: 100%;
  }
  .head ul{
    width: 133%;
    display: flex;
    justify-content: space-around;
    padding:0;
    transition: all .3s;
    margin:0;
    padding:.2rem 0;
  }
  .head ul li{
    list-style: none;
    font-size: .3rem;
    color:#666;
    padding:.1rem 0;
  }
  .content{
    margin-top: 15%;
    margin-bottom: 17%;
  }
  joke{
    border-bottom:1px solid #F1E1BC;
  }
</style>