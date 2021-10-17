import React, { Component } from "react";
import '../cart/cart.css';

class cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listcart : [
                {
                    image:"../../img/product/12.jpg",
                    name:"Coffee Cake",
                    price:"25.00",
                },
                {
                    image:"../../img/product/5.jpg",
                    name:"Candy Lollipop",
                    price:"15.00",
                },
            ]
        }
    }

    render() {

        const listcart = this.state.listcart.map((listcart, index) => {
            return <a key={ index } href='/'>
                        <div className='cart-item'>
                            <div className='cart-item-img'>
                                <img src={ this.state.listcart[index].image } className='/' alt='/'></img>
                            </div>
                            <div className='cart-item-infor'>
                                <span className='item-name'>{ this.state.listcart[index].name }</span>
                                <span className='remove-item'><i className="fas fa-times"></i></span>
                                <span className='price'>1 x ${ this.state.listcart[index].price }</span>
                            </div>
                        </div>
                    </a>
        })

        return (
            <>
                <div className='cart-box'>
                    <h3>Cart</h3>
                    <div className='cart'>
                        <div className='list-cart'>
                            { listcart }
                        </div>
                        <div className='cart-total'>
                            <h3>Subtotal: <span>$50.00</span></h3>
                        </div>
                        <div className='cart-footer'>
                            <a href='/'>
                                <span>View Cart</span>
                            </a>
                            <a href='/'>
                                <span>Check Out</span>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default cart;