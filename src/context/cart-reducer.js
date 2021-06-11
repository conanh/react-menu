import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, ADD_CONTACT_INFO, RESET_CART } from './cart-actions';

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const id = action.payload.id;
      const index = state.cart.findIndex(item => item.id === id);
      if (index >= 0) {
        const tempCart = [...state.cart];
        const quantityToAdd = parseInt(action.payload.quantity);
        const oldQuantity = state.cart[index].quantity;
        tempCart[index].quantity = oldQuantity + quantityToAdd;
        return {
          ...state,
          cart: tempCart
        }
      }
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case INCREMENT_QUANTITY:
      const incId = action.payload;
      const incIndex = state.cart.findIndex(item => item.id === incId);
      if (incIndex >= 0) {
        const tempCart = [...state.cart];
        tempCart[incIndex].quantity++;
        return {
          ...state,
          cart: tempCart
        }
      }
      return { ...state };
    case DECREMENT_QUANTITY:
      const decId = action.payload;
      const decIndex = state.cart.findIndex(item => item.id === decId);
      if (decIndex >= 0) {
        const tempCart = [...state.cart];
        tempCart[decIndex].quantity--;
        if (tempCart[decIndex].quantity === 0) {
          tempCart.splice(decIndex, 1);
        }
        return {
          ...state,
          cart: tempCart
        }
      }
      return { ...state };
    case ADD_CONTACT_INFO:
      const contactInfo = action.payload;
      return {
        ...state,
        contact: contactInfo
      }
    case RESET_CART:
      return {
        ...state,
        cart: [],
        contact: {}
      }
    default:
      return state;
  }
};

export default cartReducer;