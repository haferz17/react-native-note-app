import axios from 'axios';
const url = 'http://192.168.6.114:4000/notes/'
// export action that get notes
export const getNotes = () => {
    return {
        type: "GET_NOTES",
        payload: axios.get(url)
    }
}
export const addNote = (notesData) => {
    if(notesData.title!=='' && notesData.note!=='' && notesData.categoryId!==''){
        return {
            type: "ADD_NOTE",
            data: axios.post(url, {
                title: notesData.title,
                note: notesData.note,
                categoryId: notesData.categoryId
            }),
            payload: notesData
        }
    }
}
export const updateNote = (noteData) =>{
    if(noteData.id!==''){
        return {
            type:'UPDATE_NOTE',
            data: axios.put(url+noteData.id,{
                title:noteData.title,
                note:noteData.note,
                categoryId:noteData.categoryId
            }),
            payload:noteData
        }
    }
}
export const deleteNote = (Note) =>{
    return {
        type:'DELETE_NOTE',
        data: axios.delete(url+Note.id),
        payload: Note
    }
}
export const searchNote = (searchKey) =>{
    return {
        type: 'SEARCH_NOTE',
        payload: axios.get(url+'?search='+searchKey)
    }
}
export const sorting = (sortType) => {
    if(sortType!==''){
        return {
            type: "SORTING_NOTE",
            payload: axios.get(url+'?sort='+sortType)
        }
    }
}
export const getTheNextPage = (nextPage) =>{
    console.log('get the next page')
    return{
        type:'ADD_NEXT_PAGE',
        payload:axios.get(url+'?page='+nextPage)
    }
}
export const searchNoteByCategory = (searchKey) =>{
    return {
        type: 'SEARCH_BY_CATEGORY',
        payload: {key:searchKey}
    }
}