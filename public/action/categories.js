import axios from 'axios';
let url = 'http://notequ-api.herokuapp.com/categories'
// export action that get notes
export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: axios.get(url)
    }
}
export const addCategory = (data) =>{
    return{
        type: 'ADD_CATEGORY',
        payload: axios.post(url ,{
            name:data.name,
            image:data.image
        })
    }
}
export const deleteCategories = (categories) =>{
    return {
        type:'DELETE_CATEGORIES',
        data: axios.delete(url+categories.id),
        payload: categories
    }
}