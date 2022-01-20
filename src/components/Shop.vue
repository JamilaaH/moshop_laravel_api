<template>
  <v-container>
        <h2>{{shop.nom}}</h2>
      <v-row>
          <v-col v-for="produit, index in shop.produits" :key="index" cols=12 sm=4>
            <v-card  >
              
              <v-img
                  :src="url+'storage/'+produit.photo"
                  height="200px"></v-img>

                <v-card-title>
                  {{produit.nom}} 
                </v-card-title>      
                <v-card-actions>
                  <form :action="'/achat/'+produit.id" method="POST">
                      <v-btn
                        color="green lighten-2"
                        text
                        type="
                        submit"
                      >
                        Acheter
                      </v-btn>                            
                  </form>
          
                <v-spacer></v-spacer>
          
                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>  {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
          
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
          
                  <v-card-text>
                    {{produit.description}}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Shop',
    data() {
      return {
        show: false,
        url:'http://127.0.0.1:8000/',
      }
    },
    computed: {
      shop() {
        return this.$store.state.shop 
      }
    },
    mounted() {
      this.$store.commit('getShop')
  }

  }
</script>
