# Technical Event Management System

A full-stack role-based web application built using the MERN stack.

## 🚀 Overview

This project implements a Technical Event Management system with three roles:

- User
- Vendor
- Admin

The system includes authentication, product management, cart functionality, order processing, and vendor approval workflow.

---

## 🛠 Tech Stack

**Frontend**
- React.js
- React Router
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt (password hashing)

---

## 👥 Features

### User
- Signup / Login
- View products
- Add to cart
- Checkout
- View order history

### Vendor
- Signup (requires admin approval)
- Add products
- View orders for their products
- Update order status

### Admin
- Login
- View all orders
- View vendors
- Approve vendors

---

## 🔐 Authentication

- Password hashing using bcrypt
- JWT-based authentication
- Role-based protected routes
- Axios interceptor for secure API calls

---

## 📂 Project Structure

technical-event-management/
├── backend/
├── frontend/
└── README.md


---

## ⚙️ Setup Instructions

### Backend

```bash
cd backend
npm install
node server.js
Create .env file inside backend:

PORT=5000
JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_connection_string
Frontend
cd frontend
npm install
npm start
App runs at:

http://localhost:3000
📌 Author
Mehul Sharma
