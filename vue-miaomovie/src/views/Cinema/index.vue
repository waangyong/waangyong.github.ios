<template>
  <div id="main">
    <Header title="喵喵电影"></Header>
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/cinema/allCity" class="city_name hot_item">
          <span>全城</span><i class="iconfont idon-lower-triangle"></i>
        </router-link>
        <router-link to="/cinema/brand" tag="div" class="hot_switch">
          <div class="hot_item">品牌</div>
        </router-link>
        <router-link  to="/cinema/feature" tag="div" class="hot_switch">
          <div class="hot_item">特色</div>
        </router-link>

      </div>

    </div>
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import TabBar from '@/components/TabBar'
  export default {
    name: "Movie",
    components:{
      Header,
      TabBar,
    }
  }
</script>

<style scoped>
  #content{height: 50px;margin-top: 50px}
  #content .movie_menu{z-index: 100; background-color:#fff;position:fixed;width: 100%;height: 45px;border-bottom: 1px solid #e6e6e6;display: flex;justify-content: space-between;}
  .movie_menu .city_name{margin-left: 20px;height: 100%;line-height: 45px;}

  .movie_menu .hot_switch{display: flex;height: 100%;line-height: 45px}
  .movie_menu .hot_item{font-size: 15px;color: #666;width: 80px;text-align: center;margin: 0 12px;font-weight: 700;}
  .movie_menu .router-link-active{color: #ef4238; border-bottom: 2px #ef4238 solid}

</style>
