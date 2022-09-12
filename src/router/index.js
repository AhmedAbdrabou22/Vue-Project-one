import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import logincomponent from '../components/logincomponent.vue'
import registercomponent from '../components/registercomponent.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component:logincomponent
  },
  {
    path: '/register',
    name: 'register',
    component:registercomponent
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
