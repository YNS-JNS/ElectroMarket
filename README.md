# Electro Market Store

**Electro Market Store** is a full-stack e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to browse and purchase electronic products, with secure payment integration and an admin dashboard for managing products, orders, and customers.

## Table of Contents

- [Electro Market Store](#electro-market-store)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Environment Variables](#environment-variables)
  - [Usage](#usage)
  - [Folder Structure](#folder-structure)
  - [API Endpoints](#api-endpoints)
    - [Auth](#auth)
    - [Products](#products)
    - [Orders](#orders)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **User Authentication:** Register and login with JWT authentication.
- **Product Browsing:** View product listings with details and images.
- **Cart and Checkout:** Add products to the cart, and checkout with Stripe or PayPal integration.
- **Admin Dashboard:** Manage products, categories, users, and orders.
- **Responsive Design:** Optimized for mobile and desktop devices.
- **Dark Mode:** Toggle between light and dark themes.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, Material Tailwind, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, bcryptjs
- **Payment:** Stripe, PayPal
- **State Management:** Redux Toolkit
- **File Upload:** Cloudinary for image uploads
- **Others:** Axios, React Router, styled-components

## Installation

### Prerequisites

- Node.js (v14 or later)
- Yarn (or npm)
- MongoDB (local or cloud instance)
- Stripe and PayPal developer accounts for payment processing

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/electro-market-store.git
    cd electro-market-store
    ```

2. **Install dependencies:**

    ```bash
    # Install root dependencies
    yarn install

    # Install server dependencies
    cd server
    yarn install

    # Install client dependencies
    cd ../client
    yarn install
    ```

3. **Setup environment variables:**

    Create a `.env` file in the `server` directory and add the following:

    ```plaintext
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key
    PAYPAL_CLIENT_ID=your_paypal_client_id
    ```

4. **Run the application:**

    Start the backend and frontend servers:

    ```bash
    # Start the backend
    cd server
    yarn start

    # Start the frontend
    cd ../client
    yarn start
    ```

    The frontend should now be running on `http://localhost:3000` and the backend on `http://localhost:5000`.

## Environment Variables

Ensure the following environment variables are set in your `.env` file in the `server` directory:

- **PORT:** Port number for the server (default is 5000)
- **MONGODB_URI:** MongoDB connection string
- **JWT_SECRET:** Secret key for JWT authentication
- **CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET:** Cloudinary credentials for image uploads
- **STRIPE_SECRET_KEY:** Stripe secret key for payment processing
- **PAYPAL_CLIENT_ID:** PayPal client ID for payment processing

## Usage

- Visit the homepage at `http://localhost:3000` to start browsing products.
- Use the "Sign Up" and "Login" links to create an account or log in.
- Admin users can access the dashboard via the `/dashboard` route to manage the store.

## Folder Structure

```
electro-market-store/
│
├── client/               # Frontend code
│   ├── public/           # Public files
│   ├── src/              # React components, Redux setup, styles, etc.
│   └── ...               
│
├── server/               # Backend code
│   ├── controllers/      # API request handlers
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions (e.g., Cloudinary integration)
│   └── ...               
│
├── .env                  # Environment variables
├── package.json          # Root package file
└── README.md             # Project documentation
```

## API Endpoints

### Auth

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Log in a user

### Products

- **GET** `/api/products` - Fetch all products
- **GET** `/api/products/:id` - Fetch product details
- **POST** `/api/products` - Add a new product (Admin only)
- **PUT** `/api/products/:id` - Update a product (Admin only)
- **DELETE** `/api/products/:id` - Delete a product (Admin only)

### Orders

- **GET** `/api/orders` - Fetch all orders (Admin only)
- **POST** `/api/orders` - Create a new order
- **GET** `/api/orders/:id` - Fetch order details (Admin only)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License.