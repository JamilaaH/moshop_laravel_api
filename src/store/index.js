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
    monShop:null,
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
    clearToken(state) {
      state.user = null,
      state.token= null
    }, 
    setMyShop(state, value) {
      state.monShop = value
    }
  },
  actions: {
    //login
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
    // récupérer les infos de l'utilisateur connecté
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
    
    //déconnexion
    logout: function ( {commit, state}) {
      axios
      .post('http://127.0.0.1:8000/api/logout', {}, {
        headers: {
          Authorization: "Bearer " + state.token
          }  
      })
      .then((res) => {
          commit('clearToken');
          // state.token = res.data.data.token;
          console.log(res.data);
          })
      .catch(error => console.log(error))
    },

    // récupérer la boutique de la personne connectée
    monShop: function ( {commit, state}) {
      axios
      .get('http://127.0.0.1:8000/api/monshop',  {
        headers: {
          Authorization: "Bearer " + state.token
          }  
      })
      .then((res) => {
          commit('setMyShop', res.data.data);
          // state.token = res.data.data.token;
          console.log(res.data);
          })
      .catch(error => console.log(error))
    },
  
    //ajouter un produit 
    addProduct({dispatch,state}, value) {
      // console.log(value);
      axios.post('http://127.0.0.1:8000/api/storeproduit', value, {
        headers: {
        Authorization: "Bearer " + state.token
        }
    })
      .then((response) => {
        console.log(response)
        dispatch('getUser')
      })
      .catch(error => console.log(error))
  },   



  },
  modules: {
  },
  plugins: [createPersistedState()],

})
