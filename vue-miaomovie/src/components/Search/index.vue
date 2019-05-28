<template>
    <div class="search_body">
      <div class="search_input">
        <div class="search_input_wrapper">
          <i class="iconfont icon-sousuo" ></i>
          <input type="text" v-model="inputValue">
        </div>
      </div>
      <div class="search_input">
        <h3>电影/电视剧/综艺</h3>
        <ul>
          <li>
            <div class="img"><img src="../../../public/img/gsd.jpg" alt=""></div>
            <div class="info">
              <p><span>无名之辈</span>5.0</p>
              <p>A Cool Fish</p>
              <p>剧情，喜剧，犯罪</p>
              <p>2018.11.5</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "search",
      data(){
          return {
            inputValue:'',
            movieInfo:'',
            //搜索出来的列表
            searchList:[]
          }
      },

      //用watch异步操作
      watch:{
        // inputValue(newVal){
        //   this.axios.get("http://localhost:8080/static/search.json?rm="+newVal).then((res)=>{
        //     this.movieInfo=res.data.data.movieList
        //     this.searchList=res.data.data.movieList
        //     console.log(this.searchList)
        //   }).catch(()=>{
        //     console.log("ERROR")
        //   })
        // }
        inputValue(newVal){
            this.axios.get("http://localhost:8080/static/search.json").then((res)=>{
              this.movieInfo=res.data.data.movieList
              for (var i=0; i< this.movieInfo.length ;i++){
                if(this.movieInfo[i].rm.search(newVal) != -1){
                  this.searchList.push(this.movieInfo[i])
                  console.log(this.searchList)
                }
              }
            })
        }
      },
    }
</script>

<style scoped>
  .search_body{flex:1;overflow: auto}
.search_body .search_input{padding: 8px 10px;background-color: #f5f5f5;border-bottom: 1px solid #e5e5e5;}
  .search_body .search_input_wrapper{padding: 0 10px;border: 1px solid #e6e6e6;border-radius: 5px;}
  .search_body .search_input_wrapper i{font-size: 16px;padding: 4px 0;}
  .search_body .search_input_wrapper input{border: none;font-size: 13px;color: #333;padding: 4px 0;outline: none;width: 100%}
  .search_body  h3{font-size: 15px;color: #999;padding: 9px 15px;border-bottom: 1px solid #e6e6e6;}
  .search_body  li{border-bottom: 1px #c9c9c9 dashed;padding: 10px 15px;box-sizing: border-box;display: flex}
  .search_body .img{width: 60px;float: left;}
  .search_body  .img img{width: 100%;}
  .search_body  .info{float:left;margin-left: 15px;flex: 1;}
  .search_body  .info p{height: 22px;display: flex;flex: 1;line-height: 22px;font-size: 12px}
  .search_body .info p:nth-of-type(1) span:nth-of-type(1){font-size: 18px;flex:1;}
  .search_body .info p:nth-of-type(1) span:nth-of-type(2){font-size: 16px;color: #fc7103;}

</style>
