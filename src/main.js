import Vue from 'vue';
import App from './App.vue';
import VueFullpage from 'vue-fullpage.js';



Vue.use(VueFullpage);
Vue.config.productionTip = false;


new Vue({
  render: h => h(App)
}).$mount('#app');

