import React from 'react'
import { useParams } from "react-router-dom";
import { PageHeader, Avatar, Layout, List } from 'antd'
import Menu from 'Components/Menu'
import { connect } from 'react-redux'

const { Header, Footer, Content } = Layout

const ProductDetails = ({ items }) => {
    const { itemId } = useParams()
    const item = items.find(item => item.id === parseInt(itemId))
    const details = item ? item.details : []

    console.log("item " + itemId)
    const renderDetail = (detail) => {
        return (
            <List.Item key={detail.id}>
                <List.Item.Meta
                    title={detail.name}
                    description={detail.value}
                />
            </List.Item>
        )
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header><Menu /></Header>
            <Content style={{ margin: 'auto', width: '50%' }}>
                <PageHeader
                    title={item.name}
                    onBack={() => window.history.back()}
                    avatar={
                        <Avatar src={item.image} />
                    }
                />
                <List
                    size="large"
                    bordered
                    dataSource={details}
                    renderItem={renderDetail}
                />
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

export default connect(mapStateToProps)(ProductDetails)