export const PUT_ITEM = 'PUT_ITEM'
export const putItem = (item) => ({type: PUT_ITEM, item})

export const REMOVE_ITEM = 'REMOVE_ITEM'
export const removeItem = id => ({type: REMOVE_ITEM, id})


export const INCREMENT_ITEM = 'INCREMENT_ITEM'
export const incrementItem = id => ({type: INCREMENT_ITEM, id})

export const DECREMENT_ITEM = 'DECREMENT_ITEM'
export const decrementItem = id => ({type: DECREMENT_ITEM, id})