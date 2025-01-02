import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../pages/landing/Landing.vue';
import Login from '../pages/auth/Login.vue';
import Register from '../pages/auth/Register.vue';
import Article from '../pages/article/article.vue';
import Detail_product from '../pages/detail_product/Detail_Product.vue';
import Cart from '../pages/cart/cart.vue';
import Checkout from '../pages/checkout/checkout.vue';
import DetailProduk from '../pages/detail_product/DetailProduk.vue';
import Artikel from '../pages/article/Artikel.vue';


const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
  },
  {
    path: '/article',
    name: 'Article',
    component: Artikel,
  },
  {
    path: '/detail-product',
    name: 'DetailProduct',
    component: DetailProduk,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
});

export default router;
