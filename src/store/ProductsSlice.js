import { createSlice } from '@reduxjs/toolkit';
import Products from '../data/products';

const initialState = {
	products: Products,
	selectedProduct: null,
};
export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setSelectedProduct: (state, action) => {
			state.selectedProduct = state.products.find(p => p.id === action.payload);
		},
	},
});
