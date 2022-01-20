import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shop:null,
    token:null,
    user:null,
  },
  mutations: {
    getShop(state) {
      axios
      .get('http://127.0.0.1:8000/api/shop')
      .then(response => state.shop = response.data.data)
    },
    //connexion
    setToken (state, value) {
      state.token = value
    },
    setUser(state, value) {
      state.user = value
    },
  },
  actions: {
    login: function ( {commit, dispatch}, value) {
      console.log(value);
      axios
      .post('http://127.0.0.1:8000/api/login', value)
      .then((res) => {
          commit('setToken', res.data.token);
          // state.token = res.data.data.token;
          console.log(res.data);
          dispatch('getUser');
          })
      .catch(error => console.log(error))
  },

    async getUser({state, commit}) {
        // console.log(state.token)
        await axios.get('http://127.0.0.1:8000/api/user', {
          headers: {
          Authorization: "Bearer " + state.token
          }
      }).then((response) => {
          commit('setUser', response.data);
          // console.log(state.user)
      }) 
      },
  },
  modules: {
  },
  plugins: [createPersistedState()],

})
