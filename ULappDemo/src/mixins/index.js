import VueRouter from 'vue-router';
import routes from '../router';
import Vuex from 'vuex'
import stores from '../store.js'

Vue.use(VueRouter);
Vue.use(Vuex);
const router = new VueRouter({
    routes
});
const store = new Vuex.Store(stores);
export default {
  router,
  store,
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    }
  }
}
