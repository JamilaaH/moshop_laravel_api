<template>
    <v-container>
        <div class="d-flex justify-space-between mb-2">

            <h2>Ajouter un produit</h2> 
            <v-btn class="indigo lighten-1" dark @click="add">mon Shop</v-btn>
        </div>
        <form enctype="multipart/form-data"> 
            <v-text-field required v-model="product.nom" name="nom" label="nom">  
            </v-text-field>
            <v-text-field required v-model="product.description" name="description" label="description">  
            </v-text-field>
            <v-text-field required v-model="product.prix" name="prix" label="prix" type="number">  
            </v-text-field>
            <v-text-field required v-model="product.stock" name="stock" label="stock" type="number">  
            </v-text-field>
            <input type="file" @change="file" placeholder="photo"  name="photo" 
            truncate-length="15"
            /><br>
            <v-btn class="indigo lighten-1 mt-2" type="submit" @click="submit">Valider</v-btn>
        </form>
    </v-container>

</template>

<script>
    export default {
        data() {
            return {
                product: {
                    nom: null,
                    description: null,
                    prix: null,
                    stock: null,
                    photo: null,
                }
            }
        },
        methods: {
            submit() {
                let formData = new FormData();
                formData.append("nom", this.product.nom);
                formData.append("description", this.product.description);
                formData.append("prix", this.product.prix);
                formData.append("stock", this.product.stock);
                formData.append("photo", this.product.photo);

                this.$store.dispatch("addProduct", formData);
                this.product.nom = null;
                this.product.description = null;
                this.product.prix = null;
                this.product.stock = null;
                this.product.photo = null;
                // this.$store.dispatch('addProduct', this.product)
                this.$router.push({name:"MonShop"})
            },
            file(e) {
                this.product.photo = e.target.files[0]
                console.log(this.product.photo);
            },
            add() {
                this.$emit('show');
            }
    }
    }
</script>

<style lang="scss" scoped>

</style>