import { combineReducers } from 'redux'
import products from './products'
import { shoppingCart } from './shoppingCart'

const appRedux = combineReducers( {
    products, shoppingCart
})

const redux = (state, action) => {
    return appRedux(state, action)
}

export default redux