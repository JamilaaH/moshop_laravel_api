<template>
  <v-app>
    <Nav v-if="$router.history.current['path'] == '/'"/>
    <NavDash v-if="$router.history.current['path'] == '/dashboard'"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Nav from './components/Nav.vue'
import NavDash from './components/NavDash.vue';
export default {
  name: 'App',
  components: {Nav, NavDash},
  computed: {
  user() {
    return this.$store.state.user
  },
  token() {
    return this.$store.state.token
  }
}  ,

  data: () => ({
    //
  }),
};
</script>
