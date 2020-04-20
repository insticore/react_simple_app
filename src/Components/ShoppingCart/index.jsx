import React from 'react'
import { Layout, List, Avatar, Button } from 'antd'
import Menu from 'Components/Menu'
import { AmountPicker } from './Blocks/AmountPicker'
import { connect } from 'react-redux'
import { incrementItem, decrementItem, removeItem } from 'Redux/Actions/shoppingCart'

const { Header, Footer, Content } = Layout

const ShoppingCart = ({shoppingCart, onIncrementItem, onDecrementItem, onRemoveItem}) => {
    const renderItem = (item) => {
        const handleAmountChange = (positive) => {
            if (positive) {
                onIncrementItem(item.id)
            } else {
                onDecrementItem(item.id)
            }
        }
        const handleRemove = () => {
            onRemoveItem(item.id)
        }
        return (
            <List.Item key={item.id}>
                <List.Item.Meta
                    avatar={
                        <Avatar src={item.image} />
                    }
                    //   title={<a href="https://ant.design">{item.name.last}</a>}

                    title={item.name}
                />
                <AmountPicker amount={item.amount} onAmountChange={handleAmountChange} onRemoveItem={handleRemove} />
            </List.Item>
        )
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header><Menu /></Header>
            <Content style={{ margin: 'auto', width: '50%' }}>
                <List
                    size="large"
                    bordered
                    dataSource={shoppingCart}
                    renderItem={renderItem}
                />
                <Button size="large" contentEditable="false">

                </Button>
            </Content>
            <Footer>footer</Footer>
        </Layout>
    )
}


const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  onIncrementItem: id => dispatch(incrementItem(id)),
  onDecrementItem: id => dispatch(decrementItem(id)),
  onRemoveItem: id => dispatch(removeItem(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
