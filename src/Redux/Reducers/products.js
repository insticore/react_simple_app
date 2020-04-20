import { SELECT_ITEM } from 'Redux/Actions/products'

const initialState = {
    data: [
        {
            id: 1,
            name: "balloon",
            image: "https://www.houseofparty.com.au/wp-content/uploads/1970/01/latex-balloon-28cm-wildberry-480x480.jpg",
            price: 2.50,
            details: [
                {
                    id: 1,
                    name: "Diameter",
                    value: "50cm"
                },
                {
                    id: 2,
                    name: "Color",
                    value: "Pink"
                },
            ]
        },
        {
            id: 2,
            name: "pen",
            image: "https://officedepot.scene7.com/is/image/officedepot/626198_p_2?id=DaBRB0&fmt=jpg&fit=constrain,1&wid=404&hei=404&op_sharpen=1&qlt=95",
            price: 1.45,
            details: [
                {
                    id: 1,
                    name: "Manufacturer",
                    value: "Lenovo"
                },
                {
                    id: 2,
                    name: "Color",
                    value: "Blue"
                },
            ]
        },
    ],
    selected: {}
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ITEM:
            return {
                ...state,
                selected: action.item
            }
        default:
            return state
    }
}

export default products