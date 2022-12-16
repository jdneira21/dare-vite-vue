import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Table from '../views/Table.vue'
import Products from '../views/Products.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Table',
    component: Table
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
