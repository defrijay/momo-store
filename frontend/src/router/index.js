import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../pages/landing/Landing.vue';
import Login from '../pages/auth/Login.vue';
import Register from '../pages/auth/Register.vue';
import Cart from '../pages/cart/Cart.vue';
import Order from '../pages/cart/Order.vue';
import Payment from '../pages/cart/Payment.vue';
import Product from '../pages/product/Product.vue';
import DetailProduct from '../pages/product/DetailProduct.vue';
import Category from '../pages/category/Category.vue';
import Contact from '../pages/contact/Contact.vue';
import About from '../pages/about/About.vue';
import DetailArticle from '../pages/article/DetailArticle.vue'

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
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/order',
        name: 'Order',
        component: Order,
    },
    {
        path: '/payment',
        name: 'Payment',
        component: Payment,
    },
    {
        path: '/product',
        name: 'Product',
        component: Product,
    },
    {
        path: '/detail-product/:id',
        name: 'DetailProduct',
        component: DetailProduct,
    },
    {
        path: '/category',
        name: 'Category',
        component: Category,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/detail-article',
        name: 'DetailArticle',
        component: DetailArticle,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), 
    routes,
  });
  
  export default router;