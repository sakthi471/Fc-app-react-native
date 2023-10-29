

export const ACTIONS = {
    ADD_TO_PRODUCT: 'ADD_TO_PRODUCT',
    DELETE_FROM_PRODUCT: 'DELETE_FROM_PRODUCT',
    UPDATE_FROM_PRODUCT: 'UPDATE_FROM_PRODUCT',
    ADD_TO_CART: 'ADD_TO_CART',
    UPDATE_FAV: 'UPDATE_FAV',
    DELETE_FROM_CART: 'DELETE_FROM_CART',
    QUNATITY_INCREMENT: 'QUNATITY_INCREMENT',
    QUNATITY_DECREMENT: 'QUNATITY_DECREMENT',

}

export const initialState = {
    products: [
        {
            id: 1,
            title: 'dosa',
            category: 1,
            img: 'https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg.webp',
            price: 40,
            status: true,
        },
        {
            id: 2,
            title: 'poori',
            category: 1,
            img: 'https://ministryofcurry.com/wp-content/uploads/2020/03/puri-7.jpg',
            price: 30,
            status: false,

        },
        {
            id: 3,
            title: 'coca',
            category: 2,
            price: 20,
            status: false,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ta4F9tjjRdA55kWFCCkZrcEn8sOqMwKJhg&usqp=CAU'

        },
        {
            id: 4,
            title: 'fanta',
            category: 2,
            price: 20,
            status: true,
            img: 'https://www.jiomart.com/images/product/original/490809344/fanta-orange-300-ml-product-images-o490809344-p490809344-0-202210071748.jpg?im=Resize=(420,420)'

        },
        {
            id: 5,
            title: 'frooti',
            category: 2,
            price: 20,
            status: true,
            img: 'https://cdn11.bigcommerce.com/s-kknankib6z/images/stencil/1280x1280/products/11203/31633/frooti-frooti-200ml-x27box-frooti-78902579100024__11235.1600136291.jpg?c=2?imbypass=on'

        },
        {
            id: 6,
            title: 'pepsi',
            category: 2,
            price: 20,
            status: true,
            img: 'https://m.media-amazon.com/images/I/61r6MrDh0jL._SX679_PIbundle-12,TopRight,0,0_SX679SY685SH20_.jpg'
        },
        {
            id: 7,
            title: 'veg puff',
            category: 3,
            price: 15,
            status: false,
            img: 'https://floursandfrostings.com/wp-content/uploads/2018/03/IMG_20180306_084523_451.jpg'
        },
        {
            id: 8,
            title: 'samosa',
            category: 3,
            price: 15,
            status: true,
            img: 'https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/05/pjimage-30-1652290478.jpg'
        },
        {

            id: 9,
            title: 'ideli',
            category: 1,
            price: 20,
            status: true,
            img: 'https://idelidhaba.com/wp-content/uploads/2016/05/idli-sambar.jpg'
        },
        {

            id: 10,
            title: 'ven pongal',
            category: 1,
            price: 30,
            status: false,
            img: 'https://www.sharmispassions.com/wp-content/uploads/2012/02/VenPongal2.jpg'
        },
        {
            id: 11,
            title: '7up',
            category: 2,
            price: 20,
            status: true,
            img: 'https://www.jiomart.com/images/product/original/490916737/7up-250-ml-can-product-images-o490916737-p490916737-0-202210201751.jpg?im=Resize=(420,420)'

        },
        {
            id: 12,
            title: 'cavins',
            category: 2,
            price: 40,
            status: true,
            img: 'https://bettyfresh.com/1075-medium_default/cavins-vanila-milk-shake-180-ml.jpg'

        },

    ],
    cart: [
        {
            id: 5,
            title: 'frooti',
            category: 2,
            price: 20,
            status: true,
            img: 'https://cdn11.bigcommerce.com/s-kknankib6z/images/stencil/1280x1280/products/11203/31633/frooti-frooti-200ml-x27box-frooti-78902579100024__11235.1600136291.jpg?c=2?imbypass=on',
            fav: false,
            quantity: 4,

        },
        {
            id: 6,
            title: 'pepsi',
            category: 2,
            price: 20,
            status: true,
            img: 'https://m.media-amazon.com/images/I/61r6MrDh0jL._SX679_PIbundle-12,TopRight,0,0_SX679SY685SH20_.jpg',
            fav: false,
            quantity: 3,
        },
    ],

}


export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TO_PRODUCT:
            return {
                ...state, products: [...state.products, action.payload]
            }
        case ACTIONS.DELETE_FROM_PRODUCT:
            return {
                ...state, products: state.products.filter((item) => item.id !== action.payload.id)
            }
        case ACTIONS.UPDATE_FROM_PRODUCT:
            return {
                ...state, products: [...state.products.filter((item) => item.id !== action.payload.id), action.payload]
            }
        case ACTIONS.ADD_TO_CART:
            return {
                ...state, cart: [...state.cart, action.payload]
            }
        case ACTIONS.UPDATE_FAV:
            return {
                ...state, cart: [...handleFav(state, action.payload.id)]
            }
        case ACTIONS.DELETE_FROM_CART:
            return {
                ...state, cart: state.cart.filter((item) => item.id !== action.payload.id)
            }
        case ACTIONS.QUNATITY_INCREMENT:
            return {
                ...state, cart: [...hadleIncrement(state, action.payload.id)]
            }
        case ACTIONS.QUNATITY_DECREMENT:
            return {
                ...state, cart: [...hadleDecrement(state, action.payload.id)]
            }
        default:
            return state
            break;
    }
}



const handleFav = (state, id) => {
    const item = state.cart.find((item) => item.id == id)
    item.fav = !item.fav
    const updateFav = [...state.cart.filter((item) => item.id !== id), item]
    return updateFav.sort((a, b) => a.id - b.id)
}

const hadleIncrement = (state, id) => {
    const item = state.cart.find((item) => item.id == id)
    item.quantity = item.quantity + 1;
    const quantityIncrementItems = [...state.cart.filter((item) => item.id !== id), item]
    return quantityIncrementItems.sort((a, b) => a.id - b.id)
}
const hadleDecrement = (state, id) => {
    const item = state.cart.find((item) => item.id == id)
    item.quantity = item.quantity - 1;
    const quantityIncrementItems = [...state.cart.filter((item) => item.id !== id), item]
    return quantityIncrementItems.sort((a, b) => a.id - b.id)
}