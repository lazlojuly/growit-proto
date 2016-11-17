import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'

import profileRich from './assets/profile-rich.png'

export default class MenuComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {open: false}
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
          <Avatar src={profileRich} />
          <MenuItem onTouchTap={this.handleClose}>Stock</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Jobs</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Plan</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Stats</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Products</MenuItem>
        </Drawer>
      </div>
    )
  }
}
