<template>
    <div>
        <MonShop v-if="type=='show'" @ajout="changer"/>
        <AddProduct v-if="type=='add'" @show="show" />
        
    </div>
</template>

<script>
import AddProduct from '../components/AddProduct.vue'
import MonShop from '../components/MonShop.vue'
    export default {
        data() {
            return {
                type: 'show'
            }
        },
        components: {
            MonShop,
            AddProduct,
        },
        methods: {
            changer() {
                this.type="add"
            },
            show() {
                this.type="show"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>