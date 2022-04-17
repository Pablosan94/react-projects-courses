import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItem(state, action) {
      const itemToAdd = action.payload;
      const existingItem = state.items.find((item) => item.id === itemToAdd.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: itemToAdd.id,
          price: itemToAdd.price,
          quantity: 1,
          totalPrice: itemToAdd.price,
          name: itemToAdd.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += itemToAdd.price;
      }
    },
    removeItem(state, action) {
      const itemToRemove = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === itemToRemove.id
      );
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= itemToRemove.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
