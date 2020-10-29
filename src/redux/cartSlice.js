import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const { payload } = action
      let item = state.items.find(it => it.id == payload.id);
      if (item) {
        item['cartQuantity'] += 1
      }else{
        payload['cartQuantity'] = 1
        state.items.push(payload);
      }
    },
    removeItem: (state, action) => {
      const { payload } = action
      if (payload) {
        state.items=state.items.filter(it => it.id != payload.id);
      }
    },
    updateQuantity: (state, action) => {
      const { payload } = action
      let item = state.items.find(it => it.id == payload.id);
      if (item) {
        item['cartQuantity'] = payload.cartQuantity
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions
export const selectCartItems = state => state ? state.cart ? state.cart.items : [] : [];
export default cartSlice.reducer;