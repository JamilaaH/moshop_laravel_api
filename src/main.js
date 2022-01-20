import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth && store.state.user == null) {   
    return next('/login');}
  else {
    return next();}
})
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
