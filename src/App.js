import React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'

// material-ui theme setup
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {grey900} from 'material-ui/styles/colors'
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey900,
  },
})

const App = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className="app-shell">
      <AppBar
        title="AppBar Title"
        style={{ position: 'fixed' }}>
      </AppBar>
      {props.children}
      <Drawer
        docked={false}
        containerStyle={{ width: 'auto' }}>
        Drawer Content
      </Drawer>
    </div>
  </MuiThemeProvider>
)

export default App
