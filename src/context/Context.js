import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();


const Context = ({ children }) => {
  let products = [
		{
			id: "1",
			name: "CHICKEN PIZZA",
			price: 430,

			image: "images/chicken.jpg",
			inStock: 7,
			fastDelivery: true,
			rating: 5,
		},
		{
			id: "2",
			name: "CHEESE PIZZA",
			price: 300,

			image: "images/chesse.jpg",
			inStock: 3,
			fastDelivery: false,
			rating: 5,
		},
		{
			id: "3",
			name: "MUSHROOM PIZZA",
			price: 400,

			image: "images/Mushrom.jpg",
			inStock: 0,
			fastDelivery: true,
			rating: 3,
		},

		{
			id: "4",
			name: "ITALIAN PIZZA",
			price: 300,

			image: "images/italian.jpg",
			inStock: 6,
			fastDelivery: true,
			rating: 4,
		},
		{
			id: "5",
			name: "VEG PIZZA",
			price: 200,

			image: "images/beg.jpg",
			inStock: 7,
			fastDelivery: true,
			rating: 4,
		},
		{
			id: "6",
			name: " SPECIAL PIZZA",
			price: 500,

			image: "images/chicken.jpg",
			inStock: 6,
			fastDelivery: false,
			rating: 3,
		},
	];

    

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
