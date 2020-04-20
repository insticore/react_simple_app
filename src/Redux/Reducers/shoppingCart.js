import { PUT_ITEM, REMOVE_ITEM, INCREMENT_ITEM, DECREMENT_ITEM } from 'Redux/Actions/shoppingCart'

const initialState = {
    data: [],
    total: 0.0
}

export const shoppingCart = (state = initialState, action) => {
    switch (action.type) {
        case PUT_ITEM: {
            const newState = { ...state }
            const newItem = action.item
            const item = newState.data.find((item) => item.id === newItem.id)
            if (item) {
                item.amount++
            } else {
                newItem.amount = 1
                newState.data.push(newItem)
            }
            newState.total += newItem.price
            return newState
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.id)
            }
        }
        case INCREMENT_ITEM: {
            const newState = { ...state }
            const item = newState.data.find(item => item.id === action.id)
            if (item) {
                item.amount++

            }
            newState.total += item.price
            return newState
        }
        case DECREMENT_ITEM: {
            let total = state.total;
            const newState = {
                ...state,
                data: state.data.filter(item => {
                    if (item.id === action.id) {
                        total -= item.price
                        if (item.amount > 1) {
                            item.amount--
                        } else {
                            return false
                        }
                    }
                    return true
                })
            }
            newState.total = total;
            return newState
        }
        default: {
            return state
        }
    }
}