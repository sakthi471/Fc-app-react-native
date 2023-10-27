

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
            title: 'dosass',
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
            img: require('../assets/img/drinks/coca.jpeg')

        },
        {
            id: 4,
            title: 'fanta',
            category: 2,
            price: 20,
            status: true,
            img: require('../assets/img/drinks/fanta.jpeg')

        },
        {
            id: 5,
            title: 'frooti',
            category: 2,
            price: 20,
            status: true,
            img: require('../assets/img/drinks/frooti.jpeg')

        },
        {
            id: 6,
            title: 'pepsi',
            category: 2,
            price: 20,
            status: true,
            img: require('../assets/img/drinks/pepsi.jpeg')
        },
        {
            id: 7,
            title: 'veg puff',
            category: 3,
            price: 15,
            status: false,
            img: require('../assets/img/snacks/vegpuffs.jpeg')
        },
        {
            id: 8,
            title: 'samosa',
            category: 3,
            price: 15,
            status: true,
            img: require('../assets/img/snacks/samosa.jpeg')
        },
        {

            id: 9,
            title: 'ideli',
            category: 1,
            price: 20,
            status: true,
            img: require('../assets/img/foods/ideli.jpeg')
        },
        {

            id: 10,
            title: 'ven pongal',
            category: 1,
            price: 30,
            status: false,
            img: require('../assets/img/foods/pongal.jpeg')
        },
        {
            id: 11,
            title: '7up',
            category: 2,
            price: 20,
            status: true,
            img: require('../assets/img/drinks/7up.jpeg')

        },
        {
            id: 12,
            title: 'cavins',
            category: 2,
            price: 40,
            status: true,
            img: require('../assets/img/drinks/cavins.jpeg')

        },

    ],
    cart: [
        {
            id: 7,
            title: 'fanta',
            category: 2,
            price: 20,
            status: true,
            img: require('../assets/img/drinks/fanta.jpeg'),
            fav: false,
            quantity: 4,


        },
        {
            id: 8,
            title: 'frooti',
            category: 2,
            price: 20,
            status: true,
            img: require('../assets/img/drinks/frooti.jpeg'),
            fav: false,
            quantity: 3,


        },
    ],
    fav: [],
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