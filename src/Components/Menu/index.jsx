import React, { useState } from 'react'
import { Menu as MenuAnt, Button } from 'antd'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

const menuItems = [
    {
        key: "list",
        title: "Product List",
        href: "/"
    }
]

const renderMenuItem = (el) => (
    <MenuAnt.Item key={el.key}>
        <Link to={el.href}>{el.title}</Link>
    </MenuAnt.Item>
)

const Menu = ({total}) => {
    const [itemSelected, selectItem] = useState(menuItems[0].key)
    const onItemSelected = (item) => {
        selectItem(item.key)
    }
    return (
        <MenuAnt onClick={onItemSelected} selectedKeys={[itemSelected]} mode="horizontal">
            {menuItems.map(el => renderMenuItem(el))}
            <Button danger size="large" style={{float: "right", marginTop: "15px", marginRight: "15px"}}>
                <Link to="/shoppingCart">${Math.abs(total).toFixed(2)}</Link>
            </Button>
        </MenuAnt>
    )
}


const mapStateToProps = (state) => {
    return {
      total: state.shoppingCart.total
    }
  }

export default connect(mapStateToProps)(Menu)