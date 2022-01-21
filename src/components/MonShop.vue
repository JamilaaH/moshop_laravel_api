<template>
    <v-container>
        <div class="d-flex justify-space-between mb-2">

            <h2>mon Shop</h2> 
            <v-btn class="indigo lighten-1" dark @click="add">add</v-btn>
        </div>
        <v-row>
            <v-col v-for="produit, index in shops" :key="index" cols=12 sm=4>
                <v-card >
                <v-img
                    :src="url+'storage/'+produit.photo"
                    height="200px"></v-img>


                    <v-card-title>
                    {{produit.nom}}
                    </v-card-title>      

            
                    <v-spacer></v-spacer>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                url:'http://127.0.0.1:8000/',
            }
            },
            computed: {
            shops() {
                return this.$store.state.monShop 
            }
            },
            mounted() {
            this.$store.dispatch('monShop')
            },
            methods: {
            add() {
                this.$emit('ajout')
            }
            },

    }
</script>

<style lang="scss" scoped>

</style>