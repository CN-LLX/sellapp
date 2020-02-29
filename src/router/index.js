import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect:'/goods',
    children:[
      //商品页
      {
        path:'/goods',
        name:'Goods',
        component: () => import('../views/Goods.vue')
      },
      //商家页
      {
        path:'/merchant',
        name:'Merchant',
        component: () => import('../views/Merchant.vue')
      },
      //评价页
      {
        path:'/evaluate',
        name:'Evaluate',
        component: () => import('../views/Evaluate.vue')
      },
    ]
  },
]

const router = new VueRouter({
  linkActiveClass:'active',
  routes
})

export default router
