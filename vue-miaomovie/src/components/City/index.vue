<template>
  <div class="city_body">
      <div class="city_list">
        <loading v-if="isLoading"></loading>
        <scroller ref="city_list" v-else>
          <div>
            <div class="city_hot">
              <h2>热门城市</h2>
              <ul class="clearfix" >
                <li v-for="(i,item) in cityList" :key="item.id" @tap="handleToCity(i.list[0].na,i.list[0].id)">{{i.list[0].na}}</li>
              </ul>
            </div>
            <div class="city_sort" ref="city_sort">
              <div v-for="item in cityList" :key="item.index">
                <h2>{{item.index}}</h2>
                <ul>
                  <li v-for="itemlist in item.list" :key="itemlist.na">{{itemlist.na}}</li>
                </ul>
              </div>
            </div>
          </div>
        </scroller>


      </div>
    <div class="city_index">
      <ul>
        <li v-for="(item,index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">{{item.index}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "city",
      data(){
          return {
            a:0,
            //保存返回的所有城市
            cityList:[],
            //保存返回的热门城市
            hotList:[],
            isLoading:true
          }
      },
      mounted() {
          var cityList = window.localStorage.getItem(cityList);
          var hotList = window.localStorage.getItem(hotList);
          if (cityList && hotList){
            this.cityList=Json.parse(cityList);
            this.hotList=Json.parse(hotList);
          } else {
            setTimeout(()=>{
              this.axios.get('http://localhost:8080/static/city.json?id=10')
                .then((res)=>{
                  //调用格式化城市的方法
                  var {cityList,hotList}=this.formatCityList(res.data.data.cities);
                  this.cityList=cityList;
                  this.hotList = hotList;
                  window.localStorage.setItem("cityList",JSON.stringify(cityList));
                  window.localStorage.setItem("hotList",JSON.stringify(hotList));
                  this.isLoading=!this.isLoading
                })
                .catch(()=>{console.log("请求错误")})
            },1000)
          }

      },

      methods:{
        formatCityList(data) {
          var cityList=[];
          var hotList=[];
          for (var i = 0;i<data.length;i++){
            if(data[i].ishot==11){
              hotList.push(data[i])
            }
          }
          for(var i=0;i<data.length;i++){
            var firstLetter = data[i].py.substring(0,1).toUpperCase();
            if (toCom(firstLetter)){
              cityList.push({index:firstLetter,list:[{na:data[i].na,id:data[i].id,}]})
            }
            else {
              for (var j=0;j<cityList.length;j++){
                if(cityList[j].index === firstLetter){
                  cityList[j].list.push({na:data[i].na,id:data[i].id})
                }
              }
            }
          }
          cityList.sort((n1,n2)=>{
            if(n1.index>n2.index){
              return 1
            }
          });
          function toCom(firstLetter) {
            for(var i= 0;i<cityList.length;i++){
              if(cityList[i].index === firstLetter){
                return false;
              }
            }
            return true;
          }
          return {
            cityList,
            hotList
          }
       },
        handleToIndex(index){
          var h2 = this.$refs.city_sort.getElementsByTagName('h2');
          //this.$refs.city_sort.parentNode.scrollTop=h2[index].offsetTop
          this.$refs.city_list.toScrollTop(-h2[index].offsetTop)
        },
        //处理点击跳转
        handleToCity(na,id){
          //改变状态管理
          this.$store.commit('city/CITY_INFO',{na,id})
          //本地保存点击之后的城市
          window.localStorage.setItem('nowNum',id);
          window.localStorage.setItem('nowName',na);
          this.$router.push('/movie/nowPlaying');
        }
      }
    }
</script>

<style scoped>
   .city_body{margin-top: 85px;display: flex;width: 100%;position: absolute;top: 0;bottom: 0}
  .city_body .city_list{flex:1;overflow: auto;background: #fff5f0;}
  .city_body .city_list::-webkit-scrollbar{background-color: transparent;width: 0}
  .city_body .city_hot{margin-top: 20px}
  .city_body .city_hot h2{padding-left: 15px;line-height: 30px;font-size: 14px;background: #f0f0f0;}
  .city_body .city_hot ul li{float: left;background: #fff;width: 29%;height: 33px;margin-top: 15px;margin-left: 10px;text-align: center;line-height: 33px;box-sizing: border-box}
  .city_body .city_sort div{margin-top: 20px}
   .city_body .city_sort h2{padding-left: 15px;line-height: 30px;font-size: 14px;background: #f0f0f0;}
  .city_body .city_sort ul{padding-left: 15px;line-height: 30px;font-size: 14px;background: #f0f0f0}
   .city_body .city_sort ul li{line-height: 30px;}
  .city_body .city_index{width: 20px;display: flex;flex-direction: column;justify-content: center;text-align: center}
</style>
