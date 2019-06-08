<template>
    <div class="cinema_body">
      <loading v-if="isLoading"></loading>
      <scroller v-else v-bind:handleToScroll="handleToScroll" v-bind:handleToTouchEnd="handleToTouchEnd">
        <ul>
          <li>{{pullDownMessage}}</li>
          <li v-for="cinema in cinemaList" :key="cinema.id">
            <div>
              <span>{{cinema.rm}}</span>
              <span class="q"><span class="price">{{cinema.price}}</span>元起</span>
            </div>
            <div class="adress">
              <span>{{cinema.site}}</span>
              <span>{{cinema.m}}</span>
            </div>
            <div class="card">
              <div>小吃</div>
              <div>折扣卡</div>
            </div>
          </li>
        </ul>
      </scroller>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            cinemaList:[],
            pullDownMessage:"",
            isLoading:true
          }
      },
      mounted() {
          setTimeout(() => {
            this.axios.get("http://localhost:8080/static/cinemaList.json").then((res)=>{
              this.cinemaList=res.data.data.movieList
              this.isLoading=!this.isLoading
            })
          },1000)

      },
      methods:{
        handleToScroll(position){
          if (position.y>20) {
            this.pullDownMessage="正在刷新中"
          }
        },
        handleToTouchEnd(position){
          if (position.y>20) {
            this.axios.get("http://localhost:8080/static/nowPlaying.json")
              .then((res)=>{
                this.pullDownMessage="更新成功"
              })
          }
        }
      }
    }
</script>

<style scoped>
#content .cinema_body{flex:1;overflow: auto;}
  .cinema_body ul{padding: 20px;}
  .cinema_body li {border-bottom: 1px solid #f6e6e6;margin-bottom: 20px;}
  .cinema_body div{margin-bottom: 10px}
  .cinema_body .q{font-size: 11px;color: #f03d37;}
  .cinema_body .price{font-size: 18px;}
  .cinema_body .adress{font-size: 13px;color: #666;}
  .cinema_body .card{display: flex;}
  .cinema_body .card div{padding: 0 3px;height: 15px;line-height: 15px;border-radius: 2px;color:#f90;border: 1px solid #f90;}
  .cinema_body .card div .or{color: #f90;border: 1px solid #f90;}
  .cinema_body .card div .bl{color: #589daf;border: 1px solid #589daf;}
</style>
