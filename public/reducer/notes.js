const initialState = {
    notes: [],
    isLoading: false,
    isError: false,
    searchResult: [],
    sort: 'DESC',
    totalPages:1,
    searchByCategoryResult:[]
}
export default notes = (state = initialState, action) => {
    console.log(state.notes)
    console.log(action);
    switch(action.type){
        case 'GET_NOTES_PENDING':
            return {
                isLoading: true
            }
        case 'GET_NOTES_REJECTED':
            return {
                isLoading: false,
                isError: true
            } 
        case 'GET_NOTES_FULFILLED':
            return {
                isLoading: false,
                isError: false,
                notes: action.payload.data.value,
                totalPages: action.payload.data.totalPage
            }
        /// ADD NOTE -----------------
        case 'ADD_NOTE_PENDING':
            return {
                isLoading: true
            }
        case 'ADD_NOTE_REJECTED':
            return {
                isLoading: false,
                isError: true
            } 
        case 'ADD_NOTE_FULFILLED':
            return {
                ...state,
                notes: [...state.notes, action.payload.data],
                isLoading:false
            }
        /// UPDATE NOTE -----------------
        case 'UPDATE_NOTE_PENDING':
            return{
                ...state,
                isLoading:true
            }
        case 'UPDATE_NOTE_REJECTED':
            return{
                ...state,
                isLoading:false
            }
        case 'UPDATE_NOTE_FULFILLED':
            return {
                ...state,
                notes: [...state.notes, action.payload],
                isLoading:false
            }
        case 'SEARCH_NOTE_PENDING':
            return{
                ...state,
                isLoading:true
            }
        case 'SEARCH_NOTE_REJECTED':
            return{
                ...state,
                isLoading:false
            }
        case 'SEARCH_NOTE_FULFILLED':
            console.log('Hasil search:', action.payload.data)
            return{
                ...state,
                searchResult: action.payload.data.value,
                isLoading:false
            }
        case 'SORTING_NOTE_FULFILLED':
            return{
                ...state,
                notes: action.payload.data.value,
                sort:action.payload.data.sort,
                isLoading:false
            }
        case 'ADD_NEXT_PAGE_PENDING':
            return{
                ...state,
                isLoading:true
            }
        case 'ADD_NEXT_PAGE_REJECTED':
            return{
                ...state,
                isLoading:false
            }
        case 'ADD_NEXT_PAGE_FULFILLED':
            return{
                ...state,
                isLoading:false,
                notes: [...state.notes, ...action.payload.data.value],
                
            }
        case 'SEARCH_BY_CATEGORY_PENDING':
            return{
                ...state,
                isLoading:true
            }
        case 'SEARCH_BY_CATEGORY_REJECTED':
            return{
                ...state,
                isLoading:false
            }
        case 'SEARCH_BY_CATEGORY_FULFILLED':
            let searchResult
            for(let i = 0 ; i<notes.length ; i++){
                if(notes[i].category = action.payload){
                    searchResult.push(notes[i])
                }
            }
            console.log('ini adalah action payload: ==>>',action.payload)
            console.log('ini adalah data: ==>>',data)
            console.log('ini adalah search result: ==>>',searchResult)
            return{
                ...state,
                searchByCategoryResult:searchResult,
                isLoading:false
            }
        default:
            return state;
    }
}