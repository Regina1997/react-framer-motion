import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
    name: 'pages',
    initialState: {
        pageNumber: 1,
        totalPages: null
    },
    reducers: {
        setPageNumber(status, actions){
            status.pageNumber = actions.payload;
        }, 
        setTotalPages(status, actions){
            status.totalPages = actions.payload;
        }, 
    }
})

export const { setPageNumber, setTotalPages } = pageSlice.actions;

export default pageSlice.reducer;