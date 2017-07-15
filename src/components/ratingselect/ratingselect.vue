<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span @click="select(2,$event)" class="block positive" :class="{'active':SelectType === 2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click="select(0,$event)" class="block positive" :class="{'active':SelectType === 0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click="select(1,$event)" class="block negative" :class="{'active':SelectType === 1}">{{desc.negative}}<span class="count">{{negative.length}}</span></span>
    </div>
    <div @click="toggleContent" class="switch" :class="{'on':OnlyContent}">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;

  export default {
    props : {
      ratings : {
        type : Array,
        default () {
          return [];
        }
      },
      selectType : {
        type    : Number,
        default : ALL
      },
      onlyContent : {
        type    : Boolean,
        default : true
      },
      desc : {
        type : Object,
        default () {
          return {
            all      : '全部',
            positive : '满意',
            negative : '不满意'
          };
        }
      }
    },
    data : function () {
      return {
        SelectType  : this.selectType,
        OnlyContent : this.onlyContent
      };
    },
    computed : {
      positives () {
        return this.ratings.filter((rating) => {
          return rating.rateType === POSITIVE;
        });
      },
      negative () {
        return this.ratings.filter((rating) => {
          return rating.rateType === NEGATIVE;
        });
      }
    },
    methods : {
      select (type, event) {
        if (!event._constructed) {
          return;
        }
        this.SelectType = type;
        this.$emit('ratingtype-select', type);
      },
//      ratingtype : function (type) {
//        this.SelectType = type;
//      },
//      ContentToggle : function (OnlyContent) {
//        this.OnlyContent = OnlyContent;
//      },
      toggleContent (event) {
        if (!event._constructed) {
          return;
        }
        this.OnlyContent = !this.OnlyContent;
        this.$emit('content-toggle', this.OnlyContent);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl';
  .ratingselect
    .rating-type
      padding:18px 0
      margin:0 18px
      border-1px(rgba(7,17,27,0.1))
      font-size:0
      .block
        display:inline-block
        padding:8px 12px
        margin-right:8px
        border-radius:1px
        font-size:12px
        line-height:16px
        color:rgb(77,85,93)
        &.active
          color:#fff
        .count
          margin-left:2px
          font-size:8px
        &.positive
          background:rgba(0,160,220,0.2)
          &.active
           background:rgb(0,160,220)
        &.negative
          background:rgba(77,85,93,0.2)
          &.active
            background:rgb(77,85,93)
    .switch
      padding:12px 18px
      line-height:24px
      border-bottom:1px solid rgba(7,17,27,0.1)
      color:rgb(147,153,159)
      font-size:0
      &.on
        .icon-check_circle
          color:#00c850
      .icon-check_circle
        display:inlein-block
        vertical-align:top
        font-size:24px
        margin-right:4px
      .text
        display:inline-block
        vertical-align:top
        font-size:12px
</style>
