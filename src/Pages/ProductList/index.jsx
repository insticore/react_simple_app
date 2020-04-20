import React from 'react'
import { Layout, Row, Col } from 'antd'
import { Card } from './Blocks/Card'
import Menu from 'Components/Menu'
import { connect } from 'react-redux'
import { selectItem } from 'Redux/Actions/products'
import { putItem } from 'Redux/Actions/shoppingCart'

const { Header, Footer, Content } = Layout

const ProductList = ({items, onSelectItem, onPutItem}) => {
    const renderCard = (el) => (
        <Col span={4}>
            <Card el={el} onPutItem={onPutItem} />
        </Col>
    )
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header><Menu /></Header>
            <Content>
                <Row justify="space-around">
                    {items.map(el => renderCard(el))}
                </Row>
            </Content>
            <Footer>footer</Footer>
        </Layout>
    )
}

const mapStateToProps = (state) => {
  return {
    items: state.products.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSelectItem: (item) => dispatch(selectItem(item)),
  onPutItem: (item) => dispatch(putItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)