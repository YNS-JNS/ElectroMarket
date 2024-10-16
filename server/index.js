// Importing modules:
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
// Importing database connection:
import connectToDB from "./app/configs/db.config.js";
// Importing middlewares:
import { notFound, globalErrorHandler } from "./app/middlewares/errorHandler.js";
// Importing routes:
import authRoutes from './app/routes/auth.routes.js';
import productRoutes from './app/routes/product.routes.js';
import categoryRoutes from './app/routes/category.routes.js';
import brandRoutes from './app/routes/brand.routes.js';
import userRoutes from './app/routes/user.routes.js';

// ________________________________________________________________________

const PORT = process.env.PORT || 8080;
const app = express();

// Connect to MongoDB _____________________________________________________
connectToDB();

// ________________________________________________________________________
const corsOptions = {
    origin: '*',
}

// Middlewares: ___________________________________________________________
app.use(express.json()); // Permet de parser les requêtes au format JSON
app.use(express.urlencoded({ extended: true })); // Permet de parser les requêtes URL-encodées
app.use(cors(corsOptions)); // Autorise les requêtes provenant de différentes origines (CORS)
app.use(cookieParser()); // Permet de parser les cookies dans les requêtes HTTP
app.use(logger('dev')); // Active le logging des requêtes HTTP pour le développement


// Routes section: ________________________________________________________
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/brands', brandRoutes);
app.use('/api/v1/users', userRoutes);

// Error handler middleware: ______________________________________________
app.use(notFound);
app.use(globalErrorHandler);

// Run the server: ________________________________________________________
app.listen(PORT, () => console.log(`App is running 🚀 on Port: ${PORT} ✔`));