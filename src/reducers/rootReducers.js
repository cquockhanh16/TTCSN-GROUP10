const initState = {
    products: [
        
    ]
}

const rootReducer = (state = initState, action) => {
    let products = state.products
    let updatedProducts;
    let indexProduct;
    switch (action.type) {
        case 'DELETE_PRODUCT':
            products = products.filter(product => product.id !== action.payload.id || product.category !== action.payload.category)
            return {
                ...state, products 
            };
            
        case 'ADD_PRODUCT':
            updatedProducts = products;
            indexProduct = updatedProducts.findIndex(product => {
                return product.id === action.payload.id && product.category === action.payload.category
            })
            if(indexProduct >=0){
                updatedProducts[indexProduct] = {...updatedProducts[indexProduct], quanity: ++updatedProducts[indexProduct].quanity}
                products = [...updatedProducts]
            }else{
                action.payload = {...action.payload, quanity: 1}
            products = [...products, action.payload]
            }
            return {
                ...state, products 
            };
        
        case 'ADD_QUANITY':
            updatedProducts = products;
            indexProduct = updatedProducts.findIndex(product => {
                return product.id === action.payload.id && product.category === action.payload.category
            })
            if(indexProduct >=0){
                updatedProducts[indexProduct] = {...updatedProducts[indexProduct], quanity: ++updatedProducts[indexProduct].quanity}
                products = [...updatedProducts]
            }
            return {
                ...state, products 
            };
        
        case 'MINUS_QUANITY':
            updatedProducts = products;
            indexProduct = updatedProducts.findIndex(product => {
                return product.id === action.payload.id && product.category === action.payload.category
            })
            if(indexProduct >=0){
                updatedProducts[indexProduct] = {...updatedProducts[indexProduct], quanity: --updatedProducts[indexProduct].quanity}
                products = [...updatedProducts]
            }
            return {
                ...state, products 
            };
        default:
            return state;
    }
    
}
export default rootReducer;