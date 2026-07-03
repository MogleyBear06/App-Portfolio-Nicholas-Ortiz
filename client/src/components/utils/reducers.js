// reducers/index.js
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';

const initialState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.items],
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.item],
      };
      case ADD_MULTIPLE_TO_CART:
        // Create a new array with unique items based on _id
        const uniqueProducts = action.products.filter((newProduct) => {
          // Check if the product already exists in the cart
          return !state.cart.some((existingProduct) => existingProduct._id === newProduct._id);
        });
      
        return {
          ...state,
          cart: [...state.cart, ...uniqueProducts],
        };
      
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id && action.size === product.size) {
            return {
              ...product,
              purchaseQuantity: action.purchaseQuantity,
            };
          }
          return product;
        }),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.filter((item) => {
          return !(item._id === action._id && item.size === action.size);
        }),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    default:
      return state;
  }
};

export default rootReducer;
