import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import AirpodsProPage from './Pages/AirpodsProPage';
import CameraProductPage from './Pages/CameraProductPage'
import PhoneProductPage from './Pages/PhoneProductPage';
import PlayStationProduct from './Pages/PlayStationProduct';
import AsusLaptopProduct from './Pages/AsusLaptopProduct';
import SmartWatchProduct from './Pages/SmartWatchProduct'
import SonyAirpodsProduct from './Pages/SonyAirpodsProduct';
import ProjectorProduct from './Pages/ProjectorProduct';
import HeadPhonesProduct from './Pages/HeadPhonesProduct';
import MacbookProduct from './Pages/MacbookProduct';
import CartPage from './Pages/CartPage';


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/allProducts' element={<ShopPage />} />
          <Route path='/airpodsPro' element={<AirpodsProPage />} />
          <Route path='/cameraR5' element={<CameraProductPage />} />
          <Route path='/samsungGalaxyS23' element={<PhoneProductPage/>} />
          <Route path='/playStation5' element={<PlayStationProduct/>} />
          <Route path='/asusROG16' element={<AsusLaptopProduct/>} />
          <Route path='/smartWatchVenu2' element={<SmartWatchProduct/>} />
          <Route path='/sonyWF-airpods' element={<SonyAirpodsProduct/>} />
          <Route path='/samsungProjector' element={<ProjectorProduct/>} />
          <Route path='/quietHeadPhones45' element={<HeadPhonesProduct/>} />
          <Route path='/macBookPro16' element={<MacbookProduct/>} />
          <Route path='/cartPage' element={<CartPage/>} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
