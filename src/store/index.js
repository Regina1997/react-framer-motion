import {
    configureStore
} from '@reduxjs/toolkit';
import pagesReducer from './slice'

const store = configureStore({
    reducer: {
        pages: pagesReducer
    }
})

export default store;