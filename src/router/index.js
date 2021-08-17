import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Business from '../views/Business.vue'
import Imports from '../views/Imports.vue'
import Exports from '../views/Exports.vue'
import Payment from '../views/Payment.vue'
import Login from '../views/Login.vue'
import Seller from '../views/Seller.vue'
import Buyer from '../views/Buyer.vue'
import BrandSignup from '../views/BrandSignup.vue'
import BuyerSignup from '../views/BuyerSignup.vue'
import Contacts from '../views/Contacts.vue'
import Company from '../views/Company.vue'
import Presignup from '../views/Presignup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brands',
    name: 'BrandSignup',
    component: BrandSignup
  },
  {
    path: '/buyer',
    name: 'BuyerSignup',
    component: BuyerSignup
  },
  {
    path: '/consultation',
    name: 'Business',
    component: Business
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/imports',
    name: 'Imports',
    component: Imports
  },
  {
    path: '/seller',
    name: 'Seller',
    component: Seller
  },
  {
    path: '/contact',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/buyers',
    name: 'Buyer',
    component: Buyer
  },
  {
    path: '/company',
    name: 'Company',
    component: Company
  },
  {
    path: '/presignup',
    name: 'Presignup',
    component: Presignup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/exports',
    name: 'Exports',
    component: Exports
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
