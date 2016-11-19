import React from 'react'
import { createStore, combineReducers } from "redux"
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const pagesData = [
  { id: 1, title: 'Stock Control', icon: 'ActionHome', disabled: true,
    class: 'ProductList' },
  { id: 2, title: 'Jobs', icon: 'ActionBuild', disabled: true,
    class: 'ProductList' },
  { id: 3, title: 'Planner', icon: 'ActionDateRange', disabled: true,
    class: 'ProductList' },
  { id: 4, title: 'Stats', icon: 'ActionTrendingUp', disabled: false,
    class: 'Stats' },
  { id: 5, title: 'Products', icon: 'ImageViewComfy', disabled: false,
    class: 'ProductList' },
]

const productsData = [
  { id: 1, name: 'Broccoli' },
  { id: 2, name: 'Wasabi' },
  { id: 3, name: 'Salad Rocket' },
  { id: 4, name: 'Affilia Peas' },
  { id: 5, name: 'Green Basil' },
  { id: 6, name: 'Water Cress' },
  { id: 7, name: 'Fennel' },
  { id: 8, name: 'Purple Radish' },
  { id: 9, name: 'Peashoots' },
  { id: 10, name: 'Thai Basil' },
  { id: 11, name: 'Red Basil' },
  { id: 12, name: 'Parsley' },
  { id: 13, name: 'Red Mustard' },
  { id: 14, name: 'Blood Beetroot' },
  { id: 15, name: 'Coriander' },
]

// REDUCERS
const pages = () => pagesData

const page = (
  state = pagesData.filter(page => page.id === 4)[0],
  action
) => {
  switch (action.type) {
    case 'SET_PAGE':
      return pagesData.filter(page => page.id === action.id)[0]
    default:
      return state
  }
}

const products = () => productsData

// ROOT
const rootReducer = combineReducers({
  pages,
  page,
  products,
})
// STORE
let store = createStore(rootReducer)

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

store.subscribe(render);
render();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('ServiceWorker.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope)
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err)
  })
}
