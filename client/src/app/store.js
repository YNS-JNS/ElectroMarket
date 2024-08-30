import { configureStore } from '@reduxjs/toolkit';
// import productReducer from '../features/product/productSlice';
// import brandReducer from '../features/brand/brandSlice';
// import categoryReducer from '../features/category/categorySlice';
import authReducer from '../features/auth/authSlice'

export const store = configureStore(
    {
        reducer: {
            auth: authReducer,
            // product: productReducer,
            // brand: brandReducer,
            // category: categoryReducer,
        }
    }
)