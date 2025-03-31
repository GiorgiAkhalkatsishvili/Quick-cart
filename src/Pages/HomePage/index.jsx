import React from 'react'
import MainBannerComponent from '../../components/MainBannerComponent';
import ProductsComponent from '../../components/ProductsComponent';
import FeaturedProductsComponent from '../../components/FeaturedProductsComponent';
import ContactComponent from '../../components/ContactComponent';

const HomePage = () => {
  return (
    <div>
      <MainBannerComponent />
      <ProductsComponent />
      <FeaturedProductsComponent />
      <ContactComponent />
    </div>
  )
}

export default HomePage
