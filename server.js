const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// In-memory product storage (not needed for localStorage functionality)
let products = [];

// Routes
app.get('/', (req, res) => {
  res.render('index', { products });
});

// 404 error handling
app.use((req, res) => {
  res.status(404).render('error');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
