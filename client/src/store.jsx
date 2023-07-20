import {configureStore} from "@reduxjs/toolkit";
import crudReducer from "./slice"

export default configureStore({
    reducer:{
        crud: crudReducer
    }
})