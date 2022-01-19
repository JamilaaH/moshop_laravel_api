<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>MoShop</v-app-bar-title>

      <v-spacer></v-spacer>

        <v-btn href="/login" class="mr-3" text>Se connecter</v-btn>  
        <!-- <v-btn href="/dashboard" class="mr-3" text>Dashboard</v-bt n>   -->

      <v-divider inset vertical></v-divider>

      <v-btn
        class="mr-4 ml-5"
        color="primary"
        plain
      >
        <v-icon left icon="mdi mdi-handshake-outline"></v-icon>

      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
