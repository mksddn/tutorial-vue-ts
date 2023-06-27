<template>
    <main>
        <div class="products__container">
            <ProductItem v-for="item in products" :key="item.id" :product-item="item" @delete="deleteProduct" />
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ProductItem from "@/components/ProductItem.vue";
import { getAllProducts } from "@/services/api/ApiService.ts";
import type { IProduct, getAllProductsResponse } from "@/services/api/types";

export default defineComponent({
    components: { ProductItem },
    data() {
        return {
            products: [] as IProduct[]
        }
    },
    methods: {
        deleteProduct(id: number): void {
            console.log('id product for delete', id)
        }
    },
    async mounted() {
        console.log(await getAllProducts());
        this.products = await getAllProducts().then((res: getAllProductsResponse) => res.data.products)
    }
})
</script>

<style lang="scss">
.products__container {
    display: flex;
    flex-wrap: wrap;
}
</style>