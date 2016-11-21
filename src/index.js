import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import './index.css'
import reducers from './reducers'
import App from './App'
import Products from './components/Products'
import Stats from './components/Stats'

import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()


const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="products" component={Products} />
        <Route path="Stats" component={Stats} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// register dummy service worker for triggering add to home screen PWA behaviour
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('ServiceWorker.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope)
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err)
  })
}
