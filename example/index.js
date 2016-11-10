import lazyLoad from '../src';
import App from './vue-lazy-load.vue'

if (window.Vue) {
  window.lazyLoad = lazyLoad;
  Vue.use(lazyLoad);
}


new Vue({
  el: 'html',
  components: {
    'app': App,
  }
});

Vue.config.debug = true;
Vue.config.devtools = true;
