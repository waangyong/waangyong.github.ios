<template>
    <div id="detailContainer" class="slide-enter-active">
      <Header title="影片详情">
        <i @touchstart="handleToBack">返回</i>
      </Header>
      <div id="content" class="contentDetail">
        <div class="detail_list">
          <div class="detail_list_bg">
            <div class="detali_list_filter">
              <div class="detail_list_img">
                <img src="" alt="">
              </div>
              <div class="detail_list_info">
                <h2>无名之辈</h2>
                <p>wumingzh</p>
                <p>9.2</p>
                <p>剧情犯罪</p>
                <p>中国大陆110分钟</p>
                <p>2019年上映</p>
              </div>
            </div>
          </div>
          <div class="detail_intro">
            <p>《无名之辈》是由饶晓志执导，陈建斌 、任素汐、 潘斌龙、 章宇、王砚辉、九孔、马吟吟、程怡、宁桓宇、邓恩熙等主演的荒诞喜剧电影。该片围绕一把丢失的老枪，讲述了一对低配版的劫匪，一个落魄的保安，一个身体残疾却性格彪悍的毒舌女，这些“无名之辈”身上发生的一系列荒诞故事。该片于2018年11月16日在中国内地上映</p>
          </div>
          <div class="detail_player swiper-container">
            <ul class="swper-wrapper">
              <li class="swiper-slide">
                <div>
                  <img src="" alt="">
                </div>
                <p>陈建斌</p>
                <p>马先用</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '@/components/Header'
    export default {
        name: "detail",
      components:{Header},
      //获取id
      props:['movieId'],
      methods:{
          handleToBack(){
            this.$router.back();
          }
      }
    }
</script>

<style scoped>
#detailContainer{position: absolute;left: 0;top: 0;z-index: 100;width: 100% ;min-height: 100%;background: #fff}
.slide-enter-active{animation: .3s slideMove}
@keyframes slideMove {
  0%{transform: translateX(100%)}
  100%{transform: translateX(0)}
}
  #content .contentDetail{display: block;margin-bottom: 0}
  #content .detail_list{height: 200px;width: 100%;position: relative;overflow: hidden}
  .detail_list .detail_list_bg{width: 100%;height: 100%;filter: blur(20px)}
.detail_list .detali_list_filter{width: 100%;height: 100%;position: absolute;background-color: #40454d;opacity: .55;}
.detail_list .detali_list_img{width: 108px;height: 150px;border:solid 1px #f0f2f3;margin: 20px;}
.detail_list .detali_list_img img{width: 100%;height: 100%}
.detail_list .detali_list_info{margin-top: 20px;}
.detail_list .detali_list_info h2{font-size: 20px;color: white;font-weight: normal;line-height: 40px}
.detail_list .detali_list_info p{color:white;line-height: 20px;font-size: 14px;color: #ccc}
</style>
