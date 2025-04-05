import React from 'react'
import './CartPage.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../Redux/productsSlice';

const CartPage = () => {
  const cartItems = useSelector((state) => state.products.cartItems);
  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  }

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);
      if (isNaN(price) || isNaN(quantity)) {
        return total;
      }
      return total + (price + quantity);
    }, 0).toFixed(2);
  };


  return (
    <div className='cartPage'>
      <div className="cartPage-inner">
        <div className="main-headings">
          <h1>Your <span>Cart</span></h1>
          <h2>{cartItems.length} Items</h2>
        </div>
        <hr />
        <div className="product-details">
          <p>Product Details</p>
          <ul>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>
        </div>
        <div className="displayedProducts">
            {cartItems.map((item, index) => (
            <ul className='eachProduct' key={index}>
                <div className="product-img-texts">
                  <div className="proudct-img">
              <li><img src={item.img} alt={item.name} /></li>
                  </div>
                  <div className="image-heading">
                    <h4>{item.name}</h4>
                    <p onClick={()=>handleRemoveProduct(item.id)}>Remove</p>
                  </div>
                </div>
                <div className="displayed-product-details">
                <li>{item.price}</li>
              <li>{item.quantity}</li>
              <li>{(item.price)}</li>
              </div>
            </ul>
          ))}
          </div>
        <div className="redirectToHomeLink">
          <Link to='/allProducts'>
          <p><svg fill='#ea580c' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg> Continue Shopping</p>
          </Link>
        </div>
      </div>
      <div className="second-summaray-container">
        <div className="inner">
          <div className="main-heading">
            <h2>Order Summary</h2>
          </div>
          <div className="address-option">
            <p>Select Address</p>
            <div className="select-options">
              <select name="cars" id="cars">
  <option value="volvo">Georgia</option>
  <option value="saab">America</option>
  <option value="mercedes">Sweden</option>
  <option value="audi">Germany</option>
</select>
            </div>
          </div>
          <div className="summaray-list">
            <ul>
              <li>Price ${calculateTotalPrice()}</li>
              <li>Shipping Fee</li>
            </ul>
          </div>
          <div className="total-price">
            <p>Total ${calculateTotalPrice()}</p>
          </div>
        </div>
        <div className="final-payment-btn">
          <button>Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage;
