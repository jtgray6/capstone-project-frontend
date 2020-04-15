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
    beers: []
  },
  mutations: {
    setBreweries(state, breweries){
      state.breweries = breweries
      return state
    },
    setBeers(state, beers){
      state.beers = beers
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
          commit("setBreweries", breweries)
        })
        
    },
    fetchBeers({commit}){
      fetch(`${apiURL}/beers`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${tokens.access}`
        }
      })
        .then(response => response.json())
        .then(beers => {
          console.log(beers)
          commit("setBeers", beers)
        })
    }
  },
  modules: {
    alert,
    authentication,
    users
  }
})
