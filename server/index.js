// Importing modules:
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
// Importing database connection:
import connectToDB from "./app/configs/db.config.js";
// Importing middlewares:
import { notFound, globalErrorHandler } from "./app/middlewares/errorHandler.js";
// Importing routes:
import productRoutes from './app/routes/product.routes.js';
import categoryRoutes from './app/routes/category.routes.js';
import brandRoutes from './app/routes/brand.routes.js';

// ________________________________________________________________________
const app = express();
// ________________________________________________________________________
const corsOptions = {
    origin: '*',
}
// ________________________________________________________________________
const PORT = process.env.PORT || 8080;
// ________________________________________________________________________

// Middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(logger('dev'));

// Connect to MongoDB _____________________________________________________
connectToDB();

// Routes section: ________________________________________________________
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/brands', brandRoutes);

// Error handler middleware: ______________________________________________
app.use(notFound);
app.use(globalErrorHandler);

// Run the server: ________________________________________________________
app.listen(PORT, () => console.log(`App is running 🚀 on Port: ${PORT} ✔`));