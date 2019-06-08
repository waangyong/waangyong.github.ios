<template>
    <div class="messageBox">
      <h2>定位</h2>
      <p>北京</p>
      <div>
        <div @click="handleExit">取消</div>
        <div>切换定位</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      methods:{
           handleExit(){

        }
      }
    }
</script>

<style scoped>
.messageBox{background:#fff;width: 200px;height: 140px;border: 1px #ccc solid;border-radius: 4px;box-shadow: 3px 3px 3px #ccc;position: absolute;left: 50%;top:50%;margin:-70px 0 0 -100px  }
  .messageBox h2{text-align: center;line-height: 40px;font-size: 18px;}
  .messageBox p{text-align: center;line-height: 40px}
  .messageBox > div{display: flex;position: absolute;bottom: 0;width: 100%;border-top: 1px #ccc solid}
  .messageBox > div > div{flex:1;text-align: center;line-height: 30px;border-right: 1px solid #ccc}
.messageBox > div > div:last-child{border: none}
</style>
