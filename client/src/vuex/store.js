import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store ({
  state: {
    articels : [],
    oneArticels : {}
  },
  getters : {

  },
  mutations : {
    getAll(state, data){
      console.log(data, 'mutations');
    }
  },
  actions : {
    getArticels({commit}){
      let url = 'http://localhost:3000/api/articels'
      axios.get(url).then((respon)=>{
        console.log(respon);
        let data = respon.data
        commit('getAll', data)
      })
    }
  },
})