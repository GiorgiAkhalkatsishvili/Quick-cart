import { createSlice } from '@reduxjs/toolkit';
import airpods from '../assets/airpods.webp'
import camera from '../assets/camera.webp'
import playstationImg from '../assets/playstation.webp'
import macbookImg from '../assets/laptop.webp'
import phoneImg from '../assets/phone.webp';
import asusLaptopImg from '../assets/asusLaptop.webp'
import watchImg from '../assets/watch.webp';
import secondAirpodsImg from '../assets/secondAirpods.webp'
import projectorImg from '../assets/projector.webp'
import secondHeadPhonesImg from '../assets/headPhones.webp'
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      {
        name: 'Apple AirPods Pro 2nd gen',
        description: 'Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) provide excellent sound, active noise cancellation, and a comfortable fit. The USB-C case ensures quick charging, and they pair seamlessly with Apple devices for an effortless audio experience.',
        img: airpods,
        price: '$399.99',
        id: 1,
        link: '/airpodsPro',
        brand: 'Generic',
        color: 'Multi',
        category: 'Earphone'
      },
      {
        name: 'Canon EOS R5',
        description: `The Canon EOS R5 is a game-changing mirrorless camera with a 45MP full-frame sensor, offering ultra-high resolution and the ability to shoot 8K video. Whether you're capturing professional-quality stills or cinematic video footage, this camera delivers exceptional clarity, speed, and color accuracy. With advanced autofocus and in-body stabilization, the R5 is ideal for photographers and videographers alike.`,
        img: camera,
        price: '$150.99',
        id: 2,
        link: '/cameraR5',
        brand: 'Generic',
        color: 'Multi',
        category: 'Camera'
      },
      {
        name: ' Samsung Galaxy S23',
        description:`The Samsung Galaxy S23 offers an all-encompassing mobile experience with its advanced AMOLED display, offering vibrant visuals and smooth interactions. Equipped with top-of-the-line fitness tracking features and cutting-edge technology, this phone delivers outstanding performance. With powerful hardware, a sleek design, and long battery life, the S23 is perfect for those who demand the best in mobile innovation.`,
        img: phoneImg,
        price: '$209.99',
        id: 3,
        link: '/samsungGalaxyS23',
        brand: 'Generic',
        color: 'Multi',
        category: 'SmartPhone'
      },
      {
        name: 'PlayStation 5',
        description: `The PlayStation 5 takes gaming to the next level with ultra-HD graphics, a powerful 825GB SSD, and ray tracing technology for realistic visuals. Whether you're into high-action games or immersive storytelling, the PS5 delivers fast loading times, seamless gameplay, and stunning visuals. It's a must-have for any serious gamer looking for the ultimate gaming experience.`,
        img: playstationImg,
        price: '$415.99',
        id: 4,
        link: '/playStation5',
        brand: 'Generic',
        color: 'Multi',
        category: 'Accessories'
      },
      {
        name: 'ASUS ROG Zephyrus G16',
        description: `The ASUS ROG Zephyrus G16 gaming laptop is powered by the Intel Core i9 processor and features an RTX 4070 GPU, delivering top-tier gaming and performance. With 16GB of RAM and a 1TB SSD, this laptop is designed for gamers who demand extreme power, speed, and storage. Equipped with a stunning 16-inch display, it's built to handle the most demanding titles and applications with ease.`,
        img: asusLaptopImg,
        price: '$200.99',
        id: 5,
        link: '/asusROG16',
        brand: 'Generic',
        color: 'Multi',
        category: 'Laptop'
      },
      {
        name: 'Garmin Venu 2',
        description: 'The Garmin Venu 2 smartwatch blends advanced fitness tracking with sophisticated design, offering a wealth of features such as heart rate monitoring, GPS, and sleep tracking. Built with a 24-hour battery life, this watch is ideal for fitness enthusiasts and anyone looking to enhance their daily lifestyle. With a stunning AMOLED display and customizable watch faces, the Venu 2 combines technology with style seamlessly.',
        img: watchImg,
        price: '$349.99',
        id: 6,
        link: '/smartWatchVenu2',
        brand: 'Generic',
        color: 'Multi',
        category: 'SmartWatch'
      },
      {
        name: 'Sony WF-airpods',
        description: `Sony WF-1000XM5 true wireless earbuds deliver immersive sound with Hi-Res Audio and advanced noise cancellation technology. Designed for comfort and quality, they provide a stable, snug fit for a secure listening experience. Whether you're working out or traveling, these earbuds will keep you connected with the world around you while enjoying rich, clear sound.`,
        img: secondAirpodsImg,
        price: '$41.99',
        id: 7,
        link: '/sonyWF-airpods',
        brand: 'Generic',
        color: 'Multi',
        category: 'Earphone'
      },
      {
        name: 'Samsung Projector 4k',
        description: 'The Samsung 4K Projector offers an immersive cinematic experience with ultra-high-definition visuals and realistic color accuracy. Equipped with a built-in speaker, it delivers rich sound quality to complement its stunning 4K resolution. Perfect for movie nights, gaming, or presentations, this projector is the ultimate choice for creating an at-home theater experience or professional setting.',
        img: projectorImg,
        price: '$125.99',
        id: 8,
        link: '/samsungProjector',
        brand: 'Generic',
        color: 'Multi',
        category: 'Accessories'
      },
      {
        name: 'Bose QuietComfort 45',
        description: 'The Bose QuietComfort 45 headphones are engineered for exceptional sound quality and unparalleled noise cancellation. With a 24-hour battery life and comfortable, lightweight design, these headphones deliver premium audio for any environment. Whether on a flight, in the office, or at home, the Bose QC45 blocks out distractions, offering an immersive listening experience.',
        img: secondHeadPhonesImg,
        price: '$410.99',
        id: 9,
        link: '/quietHeadPhones45',
        brand: 'Generic',
        color: 'Multi',
        category: 'HeadPhone'
      },
      {
        name: 'MacBook Pro 16',
        description: `The MacBook Pro 16, powered by Apple's M2 Pro chip, offers outstanding performance with 16GB RAM and a 512GB SSD. Whether you're editing high-resolution video, developing software, or multitasking with ease, this laptop can handle the toughest tasks. It features a stunning Retina display with True Tone technology, making it a top choice for professionals in creative industries or anyone who demands premium performance in a portable form.`,
        img: macbookImg,
        price: '$199.99',
        id: 10,
        link: '/macBookPro16',
        brand: 'Generic',
        color: 'Multi',
        category: 'Laptop'
      },
    ],
    cartItems: [],
    createAccount: false,
  },
  reducers: {
    addToCartItems: (state, action) => {
      const exists = state.cartItems.some(item => item.id === action.payload.id);
      if (!exists) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
  createAccount: (state) => {
      state.createAccount = true;
    },
  },
})

export const { addToCartItems, createAccount} = productsSlice.actions;
export default productsSlice.reducer;
