import Vue from 'vue';
import VueRouter from 'vue-router';
import Cartoes from '@/components/Cartoes';
import Login from '@/components/auth/Login';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/cartoes',
      name: 'Cartoes',
      component: Cartoes,
    },
  ],
});
