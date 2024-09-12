import { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div className='cart-items'>
            <div className="cart-items-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map(item => {
                if (cartItems[item.id] > 0) {
                    return (
                        <div>
                            <div className='cart-items-format cart-items-format-main'>
                                <img src={item.image} alt="Item image" className='cart-icon-product-icon' />
                                <p>{item.name}</p>
                                <p>${item.new_price}</p>
                                <button className='cart-items-quantity'>{cartItems[item.id]}</button>
                                <p>${item.new_price * cartItems[item.id]}</p>
                                <img className='cart-items-remove-icon' src={remove_icon} onClick={() => removeFromCart(item.id)} alt="Remove icon" />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className="cart-items-down">
                <div className="cart-items-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-items-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
                <div className="cart-items-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cart-items-promobox">
                        <input type="text" placeholder='enter your promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
