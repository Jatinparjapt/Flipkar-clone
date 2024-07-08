import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import searchSlice from "./Search"
import proudctsSlice from "./Products"
import categoriesSlice from "./Category";
import loginSlice from "./Login"
import cartSlice from "./Cart"
const rootReducer = combineReducers({
    getCategory : categoriesSlice,
    getProducts : proudctsSlice,
    search : searchSlice,
    userAuth : loginSlice,
    cart : cartSlice
})
const store = configureStore({
    reducer : rootReducer
})

export default store