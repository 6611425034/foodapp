// controllers/menuController.js
const menu = require('../models/menuModel');

// แสดงหน้าแรก
exports.getHome = (req, res) => {
  // ใช้ EJS template pages/index.ejs สร้างหน้า HTML พร้อมส่ง title ไปให้
  res.render('pages/index', { title: 'สารสนเทศอาหารไทย' });
};

// แสดงเมนูทั้งหมด
exports.getMenu = (req, res) => {
  // แสดงหน้า /menu พร้อมส่งตัวแปร menu (array) และ title ไปให้ view
  res.render('pages/menu', { 
    title: 'เมนูอาหาร',
    menu 
  });
};

exports.getAbout = (req, res) => {
  // แสดงหน้า /menu พร้อมส่งตัวแปร menu (array) และ title ไปให้ view
  res.render('pages/about', { 
    title: 'ผู้พัฒนา',
    menu 
  });
};

// แสดงรายละเอียดเมนูตาม id
exports.getMenuDetail = (req, res) => {
  const id = parseInt(req.params.id); // รับ id จาก URL และแปลงเป็นตัวเลข
  const item = menu.find(m => m.id === id); // หารายการเมนูที่ตรงกับ id

  if (item) {
    // ถ้าพบเมนู แสดงหน้า menuDetail.ejs พร้อมส่งข้อมูลเมนู
    res.render('pages/menuDetail', { title: item.name, item });
  } else {
    // ถ้าไม่พบเมนู ส่งสถานะ 404 พร้อมข้อความ
    res.status(404).send('ไม่พบเมนู');
  }
};
