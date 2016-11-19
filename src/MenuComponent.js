import React from 'react'
import Drawer from 'material-ui/Drawer'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import ProductList from './ProductList'
import Stats from './Stats'

import profileRich from './assets/profile-rich.png'

import ActionHome from 'material-ui/svg-icons/action/home'
import ActionBuild from 'material-ui/svg-icons/action/build'
import ActionDateRange from 'material-ui/svg-icons/action/date-range'
import ActionTrendingUp from 'material-ui/svg-icons/action/trending-up'
import ImageViewComfy from 'material-ui/svg-icons/image/view-comfy'

export default class MenuComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.iconComponents = {
      ActionHome,
      ActionBuild,
      ActionDateRange,
      ActionTrendingUp,
      ImageViewComfy,
    }
    this.pageComponents = {
      ProductList,
      Stats,
    }
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  goToPage = id => {
    this.props.store.dispatch({
      type: 'SET_PAGE',
      id
    })
    this.setState({open: false})
  }

  render() {

    const state = this.props.store.getState()
    const PageComponent = this.pageComponents[state.page.class]

    return (
      <div>
        <AppBar
          title={state.page.title}
          style={{ position: 'fixed' }}
          onLeftIconButtonTouchTap={this.handleToggle}>
        </AppBar>
        <PageComponent store={this.props.store} />
        <Drawer
          docked={false}
          open={this.state.open}
          containerStyle={{ width: 'auto' }}
          onRequestChange={(open) => this.setState({open})}>
          <Menu>
            <MenuItem onTouchTap={this.handleClose} leftAvatar={<Avatar src={profileRich} />}>
            </MenuItem>

            <Divider />

            {state.pages.map(page => {
              const IconComponent = this.iconComponents[page.icon]
              return (
                <MenuItem
                  onTouchTap={() => this.goToPage(page.id)}
                  leftIcon={<IconComponent />}
                  primaryText={page.title}
                  disabled={page.disabled}
                  key={page.id}>
                </MenuItem>
              )
            })}
          </Menu>
        </Drawer>
      </div>
    )
  }
}
