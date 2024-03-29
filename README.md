

# Full-Stack User Authentication and Contact Form Project

This is a full-stack web application showcasing user authentication features (signup, login, logout) along with a contact form functionality. The backend is built with Node.js and Express, while the frontend is developed using React.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- MongoDB (You can use an online service like MongoDB Atlas)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
cd ../frontend
npm install
```

## Usage

### Backend

1. Navigate to the `backend` directory:

```bash
cd backend
```

2. Create a `.env` file in the `backend` directory with the following content:

```env
SECRET_KEY=your-secret-key
MONGODB_URI=your-mongodb-uri
```

Replace `your-secret-key` with a secure secret key for JWT and `your-mongodb-uri` with your MongoDB connection string.

3. Start the backend server:

```bash
npm start
```

The backend server will run on `http://localhost:5000`.

### Frontend

1. Navigate to the `frontend` directory:

```bash
cd frontend
```

2. Create a `.env` file in the `frontend` directory with the following content:

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

Replace `http://localhost:5000` with the actual URL of your backend server.

3. Start the frontend development server:

```bash
npm start
```

The frontend development server will run on `http://localhost:3000`.

## Folder Structure

- **backend**: Contains the Express.js backend code.
- **frontend**: Contains the React.js frontend code.

## Backend Setup

The backend is built with Node.js and Express. It includes routes for user authentication (signup, login, logout) and a contact form endpoint.

### Routes

- **POST /api/signup**: User registration endpoint.
- **POST /api/login**: User login endpoint.
- **GET /api/logout**: User logout endpoint.
- **POST /api/contact**: Contact form submission endpoint.

## Frontend Setup

The frontend is built with React and communicates with the backend using RESTful API calls. It includes components for signup, login, logout, and a contact form.

### Components

- **SignupForm**: Component for user registration.
- **LoginForm**: Component for user login.
- **LogoutButton**: Component for user logout.
- **ContactForm**: Component for the contact form.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Screenshots
![image](https://github.com/sunnysingh3972/Xenon/assets/76744031/3e6646cd-be9e-4009-97b4-e144d8d71595)
![image](https://github.com/sunnysingh3972/Xenon/assets/76744031/0360cce8-adde-48c1-afb0-d2d7c0e6180c)
![image](https://github.com/sunnysingh3972/Xenon/assets/76744031/7b6e299c-539b-4b4f-aa4d-a922643aa549)
**screenshot of database**
![image](https://github.com/sunnysingh3972/Xenon/assets/76744031/1a1ae71f-bc5b-45e9-8e69-f6d368c2e903)
![image](https://github.com/sunnysingh3972/Xenon/assets/76744031/69e64542-ab78-4340-b979-23bb01eb641f)





