const state={
  na:window.localStorage.getItem("nowName")?window.localStorage.getItem("nowName"):"成都",
  id:window.localStorage.getItem("nowNum")|| 1
};
const actions ={

};
const mutations={
  CITY_INFO(state,payload){
    state.na=payload.na;
    state.id=payload.id
  }
}
export default {
  namespaced:true,
  state,
  actions,
  mutations
}
