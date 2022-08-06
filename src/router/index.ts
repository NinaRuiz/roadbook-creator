import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainView from '../views/MainView.vue'
import CreateEditRoadbook from "@/views/CreateEditRoadbook.vue";

Vue.use(VueRouter)


const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/edit',
    name: 'CreateEditRoadbook',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    component: CreateEditRoadbook
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
