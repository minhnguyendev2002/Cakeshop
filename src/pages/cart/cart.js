import React, { Component } from "react";
import '../cart/cart.css';

class cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listcart : [
                {
                    image:"../../img/product/5.jpg",
                    name:"Candy Lollipop",
                    sale:"",
                    reduced_price:"",
                    price:"15.00",
                },
                {
                    image:"../../img/product/4.jpg",
                    name:"Classic Macaroon",
                    sale:"",
                    reduced_price:"",
                    price:"22.00",
                },
                {
                    image:"../../img/product/8.jpg",
                    name:"Coffee Cake",
                    sale:"",
                    reduced_price:"",
                    price:"38.00",
                },
            ]
        }
    }
    render() {

        const listcart = this.state.listcart.map((listcart, index) => {
            return <div key={ index } className='my-product-item'>
                        <div className='image-produt'>
                            <img src={ this.state.listcart[index].image } alt='/' />
                        </div>
                        <div className='name-produt'>
                            <h4>{ this.state.listcart[index].name }</h4>
                        </div>
                        <div className='price-product'>
                            <h4>${ this.state.listcart[index].price }</h4>
                        </div>
                        <div className='quantity-product'>
                            <span>Quantity</span>
                            <input type='number' min='1' max='10' placeholder='1' />
                        </div>
                        <div className='total-product'>
                            <h4>${ this.state.listcart[index].price }</h4>
                        </div>
                        <div className='remove-product'>
                            <span><i className='fas fa-times'></i></span>
                        </div>
                    </div>
        })

        return (
            <>
                <div className="container">
                    <div className='cart-container'>
                        <div className='cart-table'>
                            <div className='header-table'>
                                <ul>
                                    <li className="product">Product</li>
                                    <li className='price'>Price</li>
                                    <li className='quantity'>Quantity</li>
                                    <li className='total'>Total</li>
                                </ul>
                            </div>
                            <div className='list-product'>
                                { listcart }
                            </div>
                            <div className='footer-table'>
                                <div className='coupon'>
                                    <input type='text' placeholder='Coupon Code' />
                                    <button type='button'>Apply Coupon</button>
                                </div>
                                <div className='update'>
                                    <button type='button'>Update Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-4 offset-lg-8 col-md-6 col-sm-12'>
                            <div className='total-table'>
                                <h4>Cart Totals</h4>
                                <ul>
                                    <li>
                                        <span>Subtotal</span>
                                        <span>$186.00</span>
                                    </li>
                                    <li>
                                        <span>Total</span>
                                        <span className='total'>$186.00</span>
                                    </li>
                                </ul>
                                <button type='button' className='check-out'>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </>
        )
    }
}

export default cart;