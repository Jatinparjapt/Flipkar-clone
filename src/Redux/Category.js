import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// call api on home page get categorys from database
export const getCategoryFromDatabase = createAsyncThunk("gettingCategory", async ()=>{
    try {
            const options = {
              method: "GET",
              url: 'https://fakestoreapi.com/products/categories',
            };
          const categoriesData = await axios(options)
          // console.log(categoriesData , "reducer")
         return categoriesData.data;
          } catch (error) {
            console.log(error);
          }
  })

  const initialState = {
    categoriesData : null,
    isLoading : false

  }
  const categoriesSlice = createSlice({
    name:"CategoriesForHomePage",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(getCategoryFromDatabase.fulfilled , (state, action)=>{
            state.categoriesData = action.payload
        }).addCase(getCategoryFromDatabase.pending, (state, action )=>{
            state.isLoading = true
        }).addCase(getCategoryFromDatabase.rejected, (state , action)=>{
            state.isLoading = false
        })
    }
  })

   
  export default categoriesSlice.reducer