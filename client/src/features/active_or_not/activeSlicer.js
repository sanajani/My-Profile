import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     active:false
}

export const activeSlicer = createSlice({
    name:'active',
    initialState,
    reducers:{
        active:(state)=>{
            state.active = true
        },
        deActive:(state)=>{
            state.active = false
        }
    }
})

export const {active,deActive} = activeSlicer.actions;

export default activeSlicer.reducer