<template>
    <div >
      <Header title="我的喵喵"></Header>
      <Login> </Login>
      <TabBar></TabBar>
    </div>
</template>

<script>
  import Header from '@/components/Header'
  import TabBar from '@/components/TabBar'
  import Login from '@/components/Login'
    export default {
        name: "Mine",
      //注入公共的头部和底部组件
      components:{
        Header,
        TabBar,
        Login,
      }
    }
</script>

<style scoped>

</style>
