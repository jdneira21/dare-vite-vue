<template>
  <router-view/>
  <!-- <div class="p-2">
    <div class="table w-full ...">
      <div class="table-header-group ...">
        <div class="table-row">
          <div class="table-cell text-left font-bold">Producto</div>
          <div class="table-cell text-left font-bold">Cantidad</div>
          <div class="table-cell text-left font-bold">Acciones</div>
        </div>
      </div>
      <div class="table-row-group"> -->





        <!-- <div class="table-row">
          <div class="table-cell">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
          <div class="table-cell">Malcolm Lockyer</div>
          <div class="table-cell">1961</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Witchy Woman</div>
          <div class="table-cell">The Eagles</div>
          <div class="table-cell">1972</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Shining Star</div>
          <div class="table-cell">Earth, Wind, and Fire</div>
          <div class="table-cell">1975</div>
        </div> -->




        <!-- <form class="table-row" @submit.prevent="submitProduct">
          <div class="table-cell pr-1">
            <input ref="inputRefProduct" v-model="inputProduct" class="w-full rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition" type="text" />
          </div>
          <div class="table-cell pr-1">
            <input v-model="inputQuantity" class="w-20 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition" type="text" />
          </div>
          <button class="invisible" type="submit">Enviar</button>
        </form>

      </div>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
// import { useProductStore } from '../store/product'

// const productStore = useProductStore()

// const inputRefProduct = ref(null)
// const inputProduct = ref('')
// const inputQuantity = ref('')

// const submitProduct = () => {
//   productStore.storeProduct({
//     product: inputProduct.value,
//     quantity: inputQuantity.value
//   })
//   console.log(productStore)
//   console.log(productStore.getProducts)
//   console.log(productStore)
// }

// const focusInputRefProduct = () => {
//   nextTick(() => inputRefProduct.value.focus())
// }

// focusInputRefProduct()

</script>
