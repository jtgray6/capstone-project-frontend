import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from "@/views/Index"
import SignUp from "@/views/SignUp"
import Home from "@/views/Home"
import Breweries from "@/views/Breweries"
import Locations from "@/views/Locations"
import Beers from "@/views/Beers"

Vue.use(VueRouter)

const routes = [{
  name: "index",
  path: "/",
  component: Index,
},{
  name: "sign-up",
  path: "/sign-up",
  component: SignUp,
},{
  name: "home",
  path: "/home",
  component: Home,
},{
  name: "locations",
  path: "/locations",
  component: Locations,
},{
  name: "breweries",
  path: "/breweries",
  component: Breweries,
},{
  name: "beers",
  path: "/beers",
  component: Beers,
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/','/sign-up'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/');
  }

  next();
})

export default router
