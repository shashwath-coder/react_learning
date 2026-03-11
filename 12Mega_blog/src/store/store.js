import {configureStore} from '@reduxjs/toolkit'
import  auth_slice from 'authSlice.js'
const store = configureStore({
    reducer:{
        auth:auth_slice,
    }
});

export default store;