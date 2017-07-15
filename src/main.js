// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
import './common/stylus/index.styl';

Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//   el         : '#app',
//   template   : '<App/>',
//   components : {App}
// });

// let app = Vue.extend(App);

// const routes = [
//   {path       : '/goods',
//     components : goods
//   }
// ];
//
// const router = new VueRouter({
//   routes : routes
// });
//
// new Vue({
//   template   : '<App/>',
//   components : {App},
//   router     : router,
//   render     : h => h(App)
// }).$mount('#app');

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];
const router = new VueRouter({
  linkActiveClass : 'active',
  routes          : routes               // 是routes: xxx,而不是routers
});
new Vue({
   el         : '#app',
   template   : '<App/>',
   components : {App},
   router     : router,
   render     : h => h(App)
 }).$mount('#app');

// 默认打开这个文件
  router.push('/goods');
