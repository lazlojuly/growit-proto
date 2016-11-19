import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import broccoli from './assets/broccoli-small.png'

class ProductList extends React.Component {

  render() {
    return (
      <List>
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
    )
  }

}

export default ProductList
