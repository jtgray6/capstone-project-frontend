import Vue from 'vue'
import Vuex from 'vuex'

import { alert } from './alert.module';
import { authentication } from './authentication.module';
import { users } from './users.module';

const apiURL = 'http://localhost:8000/api'
const tokens = JSON.parse(localStorage.getItem('user'));


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breweries: [],
  },
  mutations: {
    setBreweries(state, breweries){
      state.breweries = breweries
      return state
    }
  },
  actions: {
    fetchBreweries({commit}){
      fetch(`${apiURL}/breweries`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${tokens.access}`
        }
      })
        .then(response => response.json())
        .then(breweries => {
          
          console.log(breweries)
          commit("setBreweries", breweries)
        })
        
    }
  },
  modules: {
    alert,
    authentication,
    users
  }
})
