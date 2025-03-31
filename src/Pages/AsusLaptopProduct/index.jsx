import React, { useState } from 'react';
import './AsusLaptopProduct.css'
import asusLaptopImg from '../../assets/asusLaptop.webp'
import { useDispatch, useSelector } from 'react-redux';

const AirpodsProPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const FifvthProduct = products[4];
  const [mainImage, setMainImage] = useState(asusLaptopImg);
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };


  return (
    <div className='asusLaptopPage'>
      <div className="asusLaptopPage-inner">
        <div className="airpods-images">
          <div className="main-img">
            <img src={mainImage} alt="" />
          </div>
          <div className="images-options">
            <div className="imgOptionOne" onClick={() => handleThumbnailClick(asusLaptopImg)}>
              <img src={asusLaptopImg} alt="" />
            </div>
          </div>
        </div>
        <div className="main-products-descreption">
          <div className="main-heading">
            <h1>{FifvthProduct.name}</h1>
          </div>
          <div className="rated-stars-svgs">
            <div className="filled-stars">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
<path d="M8.04894 0.927049C8.3483 0.00573801 9.6517 0.00574028 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" fill="#FF532E"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
<path d="M8.04894 0.927049C8.3483 0.00573801 9.6517 0.00574028 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" fill="#FF532E"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
<path d="M8.04894 0.927049C8.3483 0.00573801 9.6517 0.00574028 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" fill="#FF532E"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
<path d="M8.04894 0.927049C8.3483 0.00573801 9.6517 0.00574028 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" fill="#FF532E"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
<path d="M8.04894 0.927049C8.3483 0.00573801 9.6517 0.00574028 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" fill="#FFC4B7"/>
              </svg>
              <p>(4.5)</p>
            </div>
          </div>
          <div className="products-description">
              <p>{FifvthProduct.description}</p>
            </div>
            <div className="product-price">
              <p>{FifvthProduct.price}</p>
            </div>
          <hr />
          <div className="product-type">
            <div className="typeOne">
            <p>Brand</p>
            <span>{FifvthProduct.brand}</span>
            </div>
            <div className="typeOne">
            <p>Color</p>
            <span>{FifvthProduct.color}</span>
            </div>
            <div className="typeOne">
            <p>Category</p>
            <span>{FifvthProduct.category}</span>
            </div>
          </div>
          <div className="main-products-buttons">
            <div className="btnOne">
              <button>Add to Cart</button>
            </div>
            <div className="btnTwo">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AirpodsProPage;
