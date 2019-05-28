<template>
    <div class="movie_body">
      <loading v-if="isLoading"></loading>
      <scroller v-bind:handleToScroll="handleToScroll" v-bind:handleToTouchEnd="handleToTouchEnd">
        <ul>
          <li>{{pullDownMessage}}</li>
          <li v-for="movieInfo in movieList" :key="movieList.id">
            <div class="pic_show"><img :src="movieInfo.img" alt=""></div>
            <div class="info_list">
              <h2>{{movieInfo.rm}}</h2>
              <p>观众评 <span class="grade">9.2</span></p>
              <p>{{movieInfo.star}}</p>
              <p>{{movieInfo.showInfo}}</p>
            </div>
            <div class="btn_mall">
              预售
            </div>
          </li>
        </ul>
      </scroller>
    </div>
</template>

<script>
    export default {
        name: "commongsoon",
      data(){
          return{
            movieList:'',
            pullDownMessage:"",
            isLoading:true
          }
      },
      mounted() {
          setTimeout(()=>{
            this.axios.get("http://localhost:8080/static/commingSoon.json").then((res)=>{
              this.movieList=res.data.data.movieList
              this.isLoading=!this.isLoading
            }).catch(()=>{
              console.log('ERROR')
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
  .movie_body{flex:1;overflow: auto;height: 520px}
  .movie_body ul{margin: 0 12px;overflow: hidden;}
  .movie_body ul li{margin-top: 12px;display: flex;align-items: center;border-bottom: 1px #e6e6e6 solid;padding-bottom: 10px;}
  .movie_body .pic_show{width: 64px;height: 90px;}
  .movie_body .pic_show img{width: 100%;height: 100%}
  .movie_body .info_list{margin-left:10px;flex: 1;position: relative;}
  .movie_body .info_list h2{font-size: 17px;line-height: 24px;width: 150px;overflow: hidden;white-space: nowrap;}
  .movie_body .info_list p{font-size: 13px;color: #666;line-height: 24px;width: 200px;overflow: hidden;white-space: nowrap;}
  .movie_body .info_list img{width: 50px;position: absolute;right: 10px;top: 5px;}
  .movie_body .btn_mall,.movie_body .btn_pre{color:#fff;width: 47px;height: 27px;line-height: 28px;text-align: center;background-color: #3c9fe6;border-radius: 3px}
  .movie_body .btn_pre{background-color: #3c9fe6}
</style>
