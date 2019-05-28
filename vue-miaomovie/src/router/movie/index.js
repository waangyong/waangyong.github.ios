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
    //重定向
    {path:'/movie',
    redirect:'/movie/nowPlaying'}
  ]
}
