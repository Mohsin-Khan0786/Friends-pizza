import { createSlice } from "@reduxjs/toolkit";

const CatgoreySlice=createSlice({
    name:"categories",
    initialState:{
        category:"All",
    },
    reducers:{
        setCategory:(state,action)=>{
            state.category=action.payload;
        },
    },
    
})

export const {setCategory}=CatgoreySlice.actions;

export default CatgoreySlice.reducer;
