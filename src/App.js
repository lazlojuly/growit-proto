import React from 'react'
import './App.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {grey900} from 'material-ui/styles/colors'

import MenuComponent from './MenuComponent'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey900,
  },
})

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <MenuComponent />
  </MuiThemeProvider>
)

export default App
