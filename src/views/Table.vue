<template>
  <div class="p-2">
    <div class="table w-full">
      <div class="table-header-group">
        <div class="table-row">
          <div class="table-cell text-left font-bold">Producto</div>
          <div class="table-cell text-left font-bold">Cantidad</div>
          <div class="table-cell text-left font-bold">Acciones</div>
        </div>
      </div>
      <div class="table-row-group">

        

<!--         <div class="table-row">
          <div class="table-cell">Witchy Woman</div>
          <div class="table-cell">The Eagles</div>
          <div class="table-cell">1972</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Shining Star</div>
          <div class="table-cell">Earth, Wind, and Fire</div>
          <div class="table-cell">1975</div>
        </div> -->

        <div class="table-row" v-for="(product, i) in getProducts" :key="product.lastId" >
          <div class="table-cell">{{product.product}}</div>
          <!-- <div class="table-cell"> -->
            <form class="table-cell" @submit.prevent="submitQuantity">
              <input :ref="setItemRef" v-model="product.cantidad" class="w-20 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition" type="text" />
            </form>
          <!-- </div> -->
          <div class="table-cell">{{product.lastId}}</div>
        </div>

        <!-- <form class="table-row" @submit.prevent="submitProduct"> -->
          <div class="table-row">
          <!-- <div class="table-cell"> -->
            <form class="table-cell" @submit.prevent="submitProduct">
              <input ref="inputRefProduct" v-model="inputProduct" class="w-full rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition" type="text" />
            </form>
          <!-- </div> -->
          <div class="table-cell pr-1">
            <input v-model="inputQuantity" class="w-20 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition" type="text" />
          </div>
          <button class="invisible" type="submit">Enviar</button>
          </div>
        <!-- </form> -->

        

      </div>
    </div>

  <!--   <pre>
      {{getProducts}}
    </pre> -->
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onBeforeUpdate, onUpdated, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '../store/product'

const { getProducts, storeObjectProduct, getLastId } = useProductStore()
const router = useRouter()

const inputRefProduct = ref(null)
const inputProduct = ref('')
const inputQuantity = ref('')

let itemRefs = []

console.log(itemRefs)

const setItemRef = el => {
  if (el) {
    itemRefs.push(el)
  }
}

onBeforeUpdate(() => {
  itemRefs = []
})

// onUpdated(() => {
//   console.log('onUpdated')
//   console.log(itemRefs)
// })

onMounted(() => {
  if(itemRefs.length){
    const lastElement = itemRefs[itemRefs.length - 1]
    lastElement.focus()
  }
})

setItemRef()

const submitProduct = () => {
  storeObjectProduct({
    product: inputProduct.value,
    quantity: inputQuantity.value
  })
  router.push({ name: 'Products' })
}

const submitQuantity = () => {
  //console.log('submitQuantity')
  focusInputRefProduct()
}

if(getProducts) {
  console.log(getProducts)
  // const inputRefQuantity[getLastId] = ref(null)
  // console.log(inputRefQuantity[getLastId])
}

// const inputRefQuantity[getLastId] = getLastId.length ? ref(null) : 0

// const x = getLastId.length ? inputRefQuantity[getLastId] : 0


// console.log(getLastId)
// console.log(inputRefQuantity[getLastId])




const focusInputRefProduct = () => {
  nextTick(() => inputRefProduct.value.focus())
}

if(!getProducts.length){
  focusInputRefProduct()
}

//focusInputRefProduct()

</script>