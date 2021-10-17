import React, { Component } from "react";
import '../checkout/checkout.css';
import $ from 'jquery';

$(document).ready(function() {
    $("#country").click(function() {
        $(".list-country ul").toggleClass("action")
    })

    $('.checkbox ul li').click(function() {
        $('.checkbox ul li').removeClass('active')
        $(this).addClass('active')
        console.log($(this).index($('.checkbox ul li')))
    })

    $('.list-country ul li').click(function() {
        $('#country').html($(this).html())
        $(".list-country ul").removeClass('action')
    })
})

class checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listPRD : [
                {
                    name:"Birthday Cake",
                    quantity:"1",
                    price:"$84.00",
                },
                {
                    name:"Candy Lollipop",
                    quantity:"1",
                    price:"$84.00",
                },
                {
                    name:"classNameic Macaroon",
                    quantity:"2",
                    price:"$84.00",
                },
                {
                    name:"Coffee Cake",
                    quantity:"1",
                    price:"$84.00",
                },
                {
                    name:"French Macaroon",
                    quantity:"1",
                    price:"$84.00",
                },
            ]
        }
    }
    render() {

        const listproduct = this.state.listPRD.map((listPRD, index) => {
            return <ul key={ index }>
                        <li>{ this.state.listPRD[index].name }  × <span>{ this.state.listPRD[index].quantity }</span></li>
                        <li>{ this.state.listPRD[index].price }</li>
                    </ul>
        })

        return (
            <>
                <div className='container'>
                    <div className='checkout-box'>
                        <div className="coupon-link">
                            <div className='coupon-icon'>
                                <span><i className="fas fa-info"></i></span>
                            </div>
                            <div className="link">
                                <span>Have a coupon?</span>
                                <a href='/'>Click here to enter your code</a>
                            </div>
                        </div>
                    
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='bill-detail'>
                                    <h2>Billing details</h2>
                                    <ul className='from-bill'>
                                        <li>
                                            <label htmlFor='first-name'>First name *</label>
                                            <input type='text' id='first-name'/>
                                        </li>
                                        <li>
                                            <label htmlFor='last-name'>Last name *</label>
                                            <input type='text' id='last-name'/>
                                        </li>
                                        <li>
                                            <label htmlFor='company-name'>Company name (optional)</label>
                                            <input type='text' id='company-name'/>
                                        </li>
                                        <li className='list-country'>
                                            <label htmlFor='country'>Country *</label>
                                            <h3 id='country'>Select a country…</h3>
                                            <span><i className="fas fa-angle-down"></i></span>
                                            <ul>
                                                <li>Select a country…</li>
                                                <li>Viet Nam</li>
                                                <li>Malaysia</li>
                                                <li>Philipines</li>
                                                <li>USA</li>
                                                <li>China</li>
                                                <li>Russia</li>
                                                <li>China</li>
                                                <li>Russia</li>
                                                <li>China</li>
                                                <li>Russia</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <label htmlFor='street-adress'>Street address *</label>
                                            <input type='text' id='street-adress' placeholder='House number and street name'/>
                                            <input type='text' placeholder='Apartment,suite,unit etc. (optional)'/>
                                        </li>
                                        <li>
                                            <label htmlFor='town-city'>Town / City *</label>
                                            <input type='text' id='town-city'/>
                                        </li>
                                        <li>
                                            <label htmlFor='state-country'>State / County *</label>
                                            <input type='text' id='state-country'/>
                                        </li>
                                        <li>
                                            <label htmlFor='postcode'>Postcode/ ZIP *</label>
                                            <input type='text' id='postcode'/>
                                        </li>
                                        <li>
                                            <label htmlFor='phone'>Phone</label>
                                            <input type='text' id='company-name'/>
                                        </li>
                                        <li>
                                            <label htmlFor='email-adress'>Email Address</label>
                                            <input type='text' id='email-adress'/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='information'>
                                    <h2>Additional information</h2>
                                    <div>
                                        <label htmlFor='infor-text'>Order notes (optional)</label>
                                        <textarea placeholder='Notes about your order,e.g. special notes for delivery.'></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='checkout-table'>
                            <div className='header-table'>
                                <ul>
                                    <li>Product</li>
                                    <li>Total</li>
                                </ul>
                            </div>
                            
                            <div className='list-bill'>
                                { listproduct }
                            </div>

                            <div className='bottom-table'>
                                <ul>
                                    <li>Subtotal: </li>
                                    <li>$186.00</li>
                                </ul>
                                <ul>
                                    <li>Total</li>
                                    <li>$186.00</li>
                                </ul>
                            </div>
                        </div>

                        <div className='payment'>
                            <div className='payment-item'>
                                <div className='checkbox'>
                                    <ul>
                                        <li>
                                            <input type="radio" id="direct" name="payment-method" value="direct"/>
                                            <label htmlFor="direct">Direct Bank Transfer</label>
                                            <div>
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <input type="radio" id="check" name="payment-method" value="check" />
                                            <label htmlFor="check">Check Payments</label>
                                            <div>
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <input type="radio" id="cash" name="payment-method" value="cash" />
                                            <label htmlFor="cash">Cash On Delivery</label>
                                            <div>
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <span className='payment-bottom'>
                                    Your personal data will be used to process your order, 
                                    support your experience throughout this website, and for other purposes described in our
                                    <a href='/'> privacy policy.</a>
                                </span>
                            </div>

                            <div className='agree-bill'>
                                    <a href='/'><span>Place Order</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
}

export default checkout;