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

const App = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <MenuComponent store={props.store}  />
  </MuiThemeProvider>
)

export default App
