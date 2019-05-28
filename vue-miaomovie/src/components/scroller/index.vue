<template>
    <div class="wrapper" ref="wrapper">
      <slot>
      </slot>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
      name: "index",
      data(){
        return{
          pullDownMessage:''
        }
      },
      props:{
        handleToScroll:{
          type:Function,
          default:function () {}
        },
        handleToTouchEnd:{
          type:Function,
          default:function () {}
        }
      },
      mounted() {
        var scroll = new BScroll(this.$refs.wrapper, {
          tap: true,
          probeType: 1
        })
        this.scroll = scroll
        //下拉刷新
        scroll.on("scroll",(position)=>{
          this.handleToScroll(position)

        })
        //停止拖拽时触发的事件
        scroll.on("touchEnd",(position)=>{
          this.handleToTouchEnd(position)
        })
      },
      methods:{
        toScrollTop(y){
          this.scroll.scrollTo(0,y)
        }
      }
    }
</script>

<style scoped>
.wrapper{height: 520px;}
</style>
