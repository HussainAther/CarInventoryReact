# Car Inventory Management

![Car Inventory](img/car.png)

## Description

Car Inventory Management is a web application built with ReactJS, Node.js, Express.js, and MongoDB to manage a collection of cars. It allows users to view, add, update, and delete car records in the inventory.

## Features

- View a list of all cars in the inventory.
- Add new cars to the inventory.
- Edit existing car details.
- Delete cars from the inventory.
- View detailed information about a selected car.

## Technologies Used

- Frontend: ReactJS, Material-UI
- Backend: Node.js, Express.js
- Database: MongoDB

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance set up and running.

## Installation

1. Clone the repository.

```bash
git clone https://github.com/your-username/car-inventory.git
```

2. Install dependencies for both backend and frontend.

```bash
cd car-inventory
npm install
cd client
npm install
```

3. Set up environment variables.

Create a .env file in the project root directory.
Define the MongoDB connection string in the .env file.

In the makefile:

```bash
MONGODB_URI=your_mongodb_connection_string
```

## Usage
Start the development server.

```bash
npm run dev
```

Access the application at `http://localhost:3000` in your web browser.
API Endpoints
GET /api/cars - Retrieve all cars from the database.
POST /api/cars - Add a new car to the inventory.
PUT /api/cars/:id - Update an existing car in the inventory.
DELETE /api/cars/:id - Delete a car from the inventory.

## Contributing
Contributions are welcome! If you find a bug or want to add a new feature, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.


