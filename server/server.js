// server.js

// requires express: npm install express
// run with: node server.js

const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const app = express();
const port = 3300;


// Connect to the MongoDB database 
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a simple Mongoose schema and model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

// Create a route to add a user to the database
app.get('/add-user', async (req, res) => {
  const newUser = new User({
    username: 'john_doe',
    email: 'john@example.com',
  });
  await newUser.save();
  res.send('User added to the database!');
});

// Create a route to fetch all users from the database
app.get('/get-users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
// Visit http://localhost:3000/add-user to add a user to the database and http://localhost:3000/get-users to fetch all users.


app.get('/', (req, res) => {
  //res.send('Hello, World!');
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Catch-all route for handling unknown paths
app.all('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Middleware function to check authentication
const authenticate = (req, res, next) => {
  
  // Check if the user is authenticated (you would implement your own authentication logic)
  const isAuthenticated = true; 
  /* your authentication logic here once user auth is established*/;

  if (isAuthenticated) {
    next(); // Continue to the next middleware or route handler
  } else {
    res.status(401).send('Unauthorized');
  }
};