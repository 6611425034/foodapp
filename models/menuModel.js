// models/menuModel.js
const menu = [
  {
    id: 1,
    name: 'ส้มตำไทย',
    category: 'ยำ/สลัด',
    price: 40,
    description: 'ส้มตำรสดั้งเดิม เปรี้ยว เผ็ด เค็ม หวาน',
    ingredients: 'มะละกอดิบ มะเขือเทศ ถั่วฝักยาว พริกขี้หนู กุ้งแห้ง น้ำปลา',
    cookingTime: 10,
    difficulty: 'ง่าย',
    region: 'อีสาน',
    image: '/image/som-tam.jpg'
  },
  {
    id: 2,
    name: 'ต้มยำกุ้ง',
    category: 'ต้ม/แกง',
    price: 120,
    description: 'ต้มยำรสจัดจ้าน เปรี้ยว เผ็ด เค็ม หวาน กับกุ้งแม่น้ำตัวโต',
    ingredients: 'กุ้งแม่น้ำ ตะไคร้ ใบมะกรูด ข่า พริกขี้หนูแห้ง มะนาว',
    cookingTime: 20,
    difficulty: 'ปานกลาง',
    region: 'กลาง',
    image: '/image/tom-yum.jpg'
  },
  {
    id: 3,
    name: 'ผัดไทย',
    category: 'อาหารคาว',
    price: 80,
    description: 'เส้นหมี่ผัดรสเปรี้ยวหวาน เสิร์ฟพร้อมกุ้งสด และถั่วงอก',
    ingredients: 'เส้นหมี่ กุ้ง ไข่ หน่อไม้ ถั่วงอก น้ำตาลปีบ',
    cookingTime: 15,
    difficulty: 'ง่าย',
    region: 'กลาง',
    image: '/image/pad-thai.jpg'
  },
  {
    id: 4,
    name: 'ข้าวเหนียวมะม่วง',
    category: 'ของหวาน',
    price: 60,
    description: 'ข้าวเหนียวนุ่มราดกะทิหอม มะม่วงสุกหวานฉ่ำ',
    ingredients: 'ข้าวเหนียว มะม่วง กะทิ น้ำตาล เกลือ',
    cookingTime: 20,
    difficulty: 'ง่าย',
    region: 'กลาง',
    image: '/image/mango-sticky-rice.jpg'
  },
  {
    id: 5,
    name: 'น้ำพริกอ่อง',
    category: 'เครื่องจิ้ม',
    price: 50,
    description: 'น้ำพริกอ่องจากภาคเหนือ รสกลมกล่อม เสิร์ฟกับผักสด',
    ingredients: 'หมูสับ มะเขือเทศ พริกแห้ง หอมแดง กระเทียม ต้นหอม',
    cookingTime: 25,
    difficulty: 'ปานกลาง',
    region: 'เหนือ',
    image: '/image/nam-prik-ong.jpg'
  },
  {
    id: 6,
    name: 'ขนมจีนน้ำยา',
    category: 'อาหารคาว',
    price: 70,
    description: 'เส้นขนมจีนราดน้ำยารสเข้มข้น หอมเครื่องแกงและกะทิ',
    ingredients: 'ขนมจีน ปลาช่อน พริกแกง กะทิ ผักสด',
    cookingTime: 30,
    difficulty: 'ปานกลาง',
    region: 'ใต้',
    image: '/image/khanom-jeen.jpg'
  }

];

module.exports = menu;
