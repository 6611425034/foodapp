// routes/menuRoutes.js
const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// หน้าแรก
router.get('/', menuController.getHome);

// หน้าเมนูทั้งหมด
router.get('/menu', menuController.getMenu);

router.get('/about', menuController.getAbout);
// หน้าเมนูตาม id
router.get('/menu/:id', menuController.getMenuDetail);

// หน้าเมนูตาม id

module.exports = router;
