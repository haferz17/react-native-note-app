const initialState = {
    categories: [],
    isLoading: false,
    isError: false
}
export default categories = (state = initialState, action) => {
    switch(action.type){
        case 'GET_CATEGORIES_PENDING':
            return {
                isLoading: true
            }
        case 'GET_CATEGORIES_REJECTED':
            return {
                isLoading: false,
                isError: true
            } 
        case 'GET_CATEGORIES_FULFILLED':
            return {
                isLoading: false,
                isError: false,
                categories: action.payload.data.value
            }
        case 'ADD_CATEGORY_FULFILLED':
                let {categoriesData} = state
                let newElement = {
                    name:action.payload.data.value.name,
                    image:action.payload.data.value.image,
                }
                return {
                    ...state,
                    isLoading:false,
                    categories: [...categoriesData, newElement]
                }
    
        default:
            return state;
    }
}