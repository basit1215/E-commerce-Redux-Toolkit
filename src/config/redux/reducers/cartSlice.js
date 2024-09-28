import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        cardsitem: []
    },
    reducers: {
        addCart: (state, action) => {
            state.cardsitem.push(action.payload.item)
        },
        removeCart: (state, action) => {
            state.cardsitem.splice(action.payload.index, 1)
        }
    }
})

export const {addCart , removeCart } = cartSlice.actions
export default cartSlice.reducer