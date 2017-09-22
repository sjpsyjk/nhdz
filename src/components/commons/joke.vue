<template>
    <div class="joke">
        <div class="author">
          <!-- <img :src="require(this.authorHead)" > -->
          <img :src="authorHead">
          <span> {{authorName}} </span>
        </div>
        <div class="con">
          <span>#{{type}}#</span>
          {{text}}
          <img v-if="img" :src="img">
          <video v-if="video" :src="video" controls></video>
        </div>
        <div class="comment">
          <span @click="goodClick">
            <img v-if="!good.checked" src="../../assets/svg/dz.svg">
            <img v-else src="../../assets/svg/dzOn.svg">{{good.num}}
          </span>
          <span @click="badClick">
            <img v-if="!bad.checked" src="../../assets/svg/dc.svg">
            <img v-else src="../../assets/svg/dcOn.svg">{{bad.num}}
          </span>
          <span>
            <img v-if="!info.checked" src="../../assets/svg/info.svg">
            <img v-else src="../../assets/svg/infoOn.svg">{{info.num}}
          </span>
          <span>
            <img v-if="!zf.checked" src="../../assets/svg/zf.svg" class="float_r">
            <img v-else src="../../assets/svg/zfOn.svg" class="float_r">
          </span>
        </div>
    </div>  
</template>

<script>
  export default{
    props: ['joke'],
    mounted () {
      if (this.joke.group.large_image) {
        this.img = this.joke.group.large_image.url_list[0].url
      }
      if (this.joke.group.download_url) {
        this.video = this.joke.group.download_url
      }
    },
    data () {
      return {
        authorHead: this.joke.group.user.avatar_url,
        authorName: this.joke.group.user.name,
        type: this.joke.group.category_name,
        text: this.joke.group.content,
        img: false,
        video: false,
        good: {num: this.joke.group.digg_count, checked: false},
        bad: {num: this.joke.group.bury_count, checked: false},
        info: {num: this.joke.group.comment_count, checked: false},
        zf: {checked: false}
      }
    },
    methods: {
      goodClick () {
        if (this.good.checked === this.bad.checked) {
          this.good.checked = true
        }
      },
      badClick () {
        if (this.good.checked === this.bad.checked) {
          this.bad.checked = true
        }
      }
    }
  }
</script>

<style scoped>
  .float_r{
    float:right;
  }
  .joke{
    font-size: .3rem;
    border-bottom:.15rem solid #EAE4CF;
    padding:.1rem;
    line-height: .4rem;
  }
  .author img{
    width: .6rem;
    border-radius: 50%;
    vertical-align: middle;
  }
  .con span{
    color:#ED7398;
  }
  img{
    max-width: 100%;
  }
  .comment img{
    vertical-align: middle;
    margin: .1rem;
  }
</style>