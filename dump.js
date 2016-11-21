<AppBar
  title="AppBar Title"
  style={{ position: 'fixed' }}>
</AppBar>
<div>Content</div>
<Drawer
  docked={false}
  containerStyle={{ width: 'auto' }}
  onRequestChange={(open) => this.setState({open})}>
  Drawer Content
</Drawer>

{/*<List>
  {this.props.store.getState().products.map(product => {
    return (
      <ListItem
        key={product.id}
        primaryText={product.name}
        leftAvatar={<Avatar src={broccoli} />}>
      </ListItem>
    )
  })}
</List>
*/}
)
