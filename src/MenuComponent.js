import React from 'react'
import Drawer from 'material-ui/Drawer'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'

import profileRich from './assets/profile-rich.png'

import ActionHome from 'material-ui/svg-icons/action/home'
import ActionBuild from 'material-ui/svg-icons/action/build'
import ActionDateRange from 'material-ui/svg-icons/action/date-range'
import ActionTrendingUp from 'material-ui/svg-icons/action/trending-up'
import ImageViewComfy from 'material-ui/svg-icons/image/view-comfy'

export default class MenuComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {open: false}
    this.drawerStyle = {width: "auto", backgroundColor:"red"}
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  render() {
    return (
      <div>
        <AppBar title="GrowIT" onLeftIconButtonTouchTap={this.handleToggle} />
        <Drawer
          docked={false}
          open={this.state.open}
          containerStyle={{ width: 'auto' }}
          onRequestChange={(open) => this.setState({open})}
        >
        <Menu>
          <MenuItem onTouchTap={this.handleClose}
            leftIcon={<Avatar src={profileRich} />}>
          </MenuItem>
          <Divider />
          <MenuItem onTouchTap={this.handleClose} leftIcon={<ActionHome />} primaryText="Stock" />
          <MenuItem onTouchTap={this.handleClose} leftIcon={<ActionBuild />} primaryText="Jobs" />
          <MenuItem onTouchTap={this.handleClose} leftIcon={<ActionDateRange />} primaryText="Plan" />
          <MenuItem onTouchTap={this.handleClose} leftIcon={<ActionTrendingUp />}  primaryText="Stats" />
          <MenuItem onTouchTap={this.handleClose} leftIcon={<ImageViewComfy />}   primaryText="Products" />
        </Menu>
        </Drawer>
      </div>
    )
  }
}
