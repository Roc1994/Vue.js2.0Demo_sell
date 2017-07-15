<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link tag="li" to="/goods"><a>商品</a></router-link>
      </div>
      <div class="tab-item">
        <router-link tag="li" to="/ratings"><a>评论</a></router-link>
      </div>
      <div class="tab-item">
        <router-link tag="li" to="/seller"><a>商家</a></router-link>
      </div>
    </div>
    <router-view class="view" :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue';

  const ERR = 0;

  export default {
    data () {
      return {
        seller : {}
      };
    },
    created () {
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
        if (response.errno === ERR) {
          this.seller = response.data;
        }
      });
    },
    components : {
      'v-header' : header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl";

    .tab {
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-1px(rgba(7,17,27,0.1)) ;
    }
       .tab .tab-item {
         flex: 1;
         text-align: center;
       }
        .tab .tab-item a {
          display: block;
          font-size: 14px;
          color: rgb(77, 85, 93);
        }
        .tab .tab-item li.active a{
          color:rgb(240,20,20);
        }
</style>
