import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shop:null
  },
  mutations: {
    getShop(state) {
      axios
      .get('http://127.0.0.1:8000/api/shop')
      .then(response => state.shop = response.data.data)
    },
  },
  actions: {
  },
  modules: {
  }
})
