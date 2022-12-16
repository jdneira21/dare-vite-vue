<template>
  <div class="px-1 pt-1 border-gray-400">

    <div class="px-1 pt-1" v-if="filteProducts">
      <button ref="buttonProduct" type="button" v-for="(product, i) in filteProducts" :key="i"
        class="cursor-none transition text-left font-roboto text-gray-200 focus:outline-none block bg-zinc-800 focus:bg-violet-600 hover:bg-violet-600 active:bg-violet-500 pl-1 py-1 my-0.5 w-full rounded"
        @click="addItem(product)" @keydown="onArrow">{{ product.product }}</button>
    </div>

    <!-- {{filteProducts}} -->
    <div v-if="!filteProducts.length">
      No hay productos
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { nanoid } from 'nanoid'
import { useProductStore } from '../store/product'
import { products } from '../../bd.js'

const router = useRouter()

const { getProduct, storeProduct, storelastId } = useProductStore()

const filteProducts = computed(() => {
  if(getProduct.product.length) {
    return products.filter((product: any) => {
      return product.product.toLowerCase().indexOf(getProduct.product.toLowerCase()) >= 0 || product.product.toLowerCase().indexOf(getProduct.product.toLowerCase()) >= 0
    })
  }
})

// console.log(getProduct)

const buttonProduct = ref(null)

onMounted(() => {
  if(buttonProduct.value) {
    buttonProduct.value[0].focus()
  }
})


const addItem = (itemProduct) => {
  const { id, product, precio, precioUnidad } = itemProduct
  const lastId = nanoid(5)
  console.log(itemProduct)
  storeProduct({
    id,
    lastId,
    product,
    precioActual: precio,
    precioActualUnidad: precioUnidad,
    cantidad: ''
  })
  storelastId({
    lastId
  })
  router.push({ name: 'Table' })
  // const { product } = itemProduct
}

const onArrow = (e) => {
  // console.log(e)

  if(e.code === 'Escape') {
    router.push({ name: 'Table' })
    return false
  }

if(e.code === 'ArrowUp') {

    for(let i = 0; i < buttonProduct.value.length; i++) {
      const currentProduct = buttonProduct.value[i]
      if(document.activeElement === currentProduct){
        if(!i) return false
        currentProduct.previousSibling.focus()
      }
    }

  }

  if(e.code === 'ArrowDown') {

    for(let i = 0; i < buttonProduct.value.length; i++) {

      const currentProduct = buttonProduct.value[i]
      const maxIndex = i + 1

      if(document.activeElement === currentProduct){
        if(buttonProduct.value.length === maxIndex) return false
        currentProduct.nextSibling.focus()
        return false
      }

    }

  }




}

// console.log(filteProducts)




</script>