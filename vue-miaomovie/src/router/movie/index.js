export default {
  path:'/movie',
  component:()=>import('@/views/Movie'),
  children:[
    {path:'/movie/city',
    component:()=>import('@/components/City')},
    {path:'/movie/nowPlaying',
      component:()=>import('@/components/NowPlaying')},
    {path:'/movie/commingSoon',
      component:()=>import('@/components/CommingSoon')},
    {path:'/movie/search',
      component:()=>import('@/components/Search')},
    //动态路由
    {path:'/movie/detail/:movieId',
      components:{
      default:()=>import('@/components/NowPlaying'),
      detail:()=>import('@/views/Movie/detail')
      },
      //路由传参
    props:{
      detail:true
    }},
    // {path:'/movie/detail/2/:movieId',
    //   components:{
    //     default:()=>import('@/components/commingSoon'),
    //     detail:()=>import('@/views/Movie/detail')
    //   },
    //   props:{
    //     detail:true
    //   }
    //  },

    //重定向
    {path:'/movie',
    redirect:'/movie/nowPlaying'}
  ]
}
