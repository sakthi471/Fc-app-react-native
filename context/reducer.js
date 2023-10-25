

export const ACTIONS = {
    ADD_TO_PRODUCT: 'ADD_TO_PRODUCT',
    DELETE_FROM_PRODUCT: 'DELETE_FROM_PRODUCT',



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
            id: 6,
            title: 'coca',
            category: 2,
            price: 20,
            status: false,
            img: require('../assets/img/drinks/coca.jpeg')

        },
        {
            id: 7,
            title: 'fanta',
            category: 2,
            price: 20,
            status: true,
            img: require('../assets/img/drinks/fanta.jpeg')

        },
        {
            id: 8,
            title: 'frooti',
            category: 2,
            price: 20,
            status: true,
            img: require('../assets/img/drinks/frooti.jpeg')

        },
        {
            id: 9,
            title: 'pepsi',
            category: 2,
            price: 20,
            status: true,
            img: require('../assets/img/drinks/pepsi.jpeg')
        },
        {
            id: 10,
            title: 'veg puff',
            category: 3,
            price: 15,
            status: false,
            img: require('../assets/img/snacks/vegpuffs.jpeg')
        },
        {
            id: 11,
            title: 'samosa',
            category: 3,
            price: 15,
            status: true,
            img: require('../assets/img/snacks/samosa.jpeg')
        },

    ],
    cart: [],
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
        default:
            break;
    }
}