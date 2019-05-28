export default {
  path:'/cinema',
  component:()=>import('@/views/Cinema'),
  children:[
    {path:'/cinema/allCity',
      component:()=>import('@/components/AllCity')},
    {path:'/cinema/brand',
      component:()=>import('@/components/Brand')},
    {path:'/cinema/Feature',
      component:()=>import('@/components/Feature')},
    {path:'/cinema',redirect:'/cinema/allCity'}
  ]
}
