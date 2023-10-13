import { createRouter, createWebHashHistory } from 'vue-router'
import CrossChain from '../views/examples/crosschain.vue'
import Telemetry from '../views/examples/telemetry.vue'
import Home from '../views/examples/home.vue'
import Rwssetup from '../views/examples/rwssetup.vue'
import RwssetupEdit from '../views/examples/rwssetup-edit.vue'
import Rwssetupslist from '../views/examples/rwssetupslist.vue'
import Rwsuserslist from '../views/examples/rwsuserslist.vue'
import Rwsactivate from '../views/examples/rwsactivate.vue'
import Rwsusersetup from '../views/examples/rwsusersetup.vue'
import Hasetup from '../views/examples/hasetup.vue'
import Services from '../views/examples/services.vue'

const routes = [
  {
    path: '/cross-chain',
    name: 'ExampleCrossChain',
    component: CrossChain
  },
  {
    path: '/telemetry',
    name: 'ExampleTelemetry',
    component: Telemetry
  },
  {
    path: '/',
    name: 'ExampleHome',
    component: Home
  },
  {
    path: '/rwssetup',
    name: 'ExampleRwssetup',
    component: Rwssetup
  },
  {
    path: '/rwssetup-edit',
    name: 'ExampleRwssetupEdit',
    component: RwssetupEdit
  },
  {
    path: '/rwsactivate',
    name: 'ExampleRwsactivate',
    component: Rwsactivate
  },
  {
    path: '/rwssetupslist',
    name: 'ExampleRwssetupslist',
    component: Rwssetupslist
  },
  {
    path: '/rwsusersetup',
    name: 'ExampleRwsusersetup',
    component: Rwsusersetup
  },
  {
    path: '/rwsuserslist',
    name: 'ExampleRwsuserslist',
    component: Rwsuserslist
  },
  {
    path: '/hasetup',
    name: 'ExampleHasetup',
    component: Hasetup
  },
  {
    path: '/services',
    name: 'ExampleServices',
    component: Services
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
