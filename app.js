const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const menuRoutes = require('./routes/menuRoutes');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware สำหรับไฟล์ static (css, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// ใช้ routes
app.use('/', menuRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
