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

    this.avatarStyle = {"marginBottom": 15}
    this.menuStyle = {
      paper: {
        display: 'inline-block',
        float: 'left',
        margin: '16px 32px 16px 0',
      },
      rightIcon: {
        textAlign: 'center',
        lineHeight: '24px',
      },
    }
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  render() {
    return (
      <div>
        <AppBar title="GrowIT" onLeftIconButtonTouchTap={this.handleToggle} />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >

          <Menu>
            <MenuItem onTouchTap={this.handleClose}
              leftAvatar={
                <Avatar src={profileRich} />
              }>
            </MenuItem>
            <Divider />
            <MenuItem onTouchTap={this.handleClose} leftIcon={<ActionHome />}>Stock</MenuItem>
            <MenuItem onTouchTap={this.handleClose} leftIcon={<ActionBuild />}>Jobs</MenuItem>
            <MenuItem onTouchTap={this.handleClose} leftIcon={<ActionDateRange />}>Plan</MenuItem>
            <MenuItem onTouchTap={this.handleClose} leftIcon={<ActionTrendingUp />}>Stats</MenuItem>
            <MenuItem onTouchTap={this.handleClose} leftIcon={<ImageViewComfy />}>Products</MenuItem>
          </Menu>
        </Drawer>
      </div>
    )
  }
}
