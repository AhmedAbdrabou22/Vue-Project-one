import { createRouter, createWebHashHistory } from 'vue-router'
import logincomponent from '../components/logincomponent.vue'
import registercomponent from '../components/registercomponent.vue'
import adventureComponent from '../components/adventure.vue'
import feature from '../components/featuretours.vue'

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
  {
    path :'/',
    name:'home',
    component :adventureComponent
  },
  {
    path: '/feature',
    name:'feature',
    component:feature
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
