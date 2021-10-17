import React, { Component } from "react";
import '../product/product.css';
import Option from "../options/option";

class product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listproduct : [
                {
                    image:"../../img/product/12.jpg",
                    name:"Authentic Macaroons",
                    sale:"Sale",
                    reduced_price:"$29.00",
                    price:"25.00",
                },
                {
                    image:"../../img/product/10.jpg",
                    name:"Birthday Cake",
                    sale:"",
                    reduced_price:"",
                    price:"84.00",
                },
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
                    sale:"Sale",
                    reduced_price:"$15.00",
                    price:"22.00",
                },
                {
                    image:"../../img/product/8.jpg",
                    name:"Coffee Cake",
                    sale:"",
                    reduced_price:"",
                    price:"38.00",
                },
                {
                    image:"../../img/product/3.jpg",
                    name:"French Macaroon",
                    sale:"",
                    reduced_price:"",
                    price:"17.00",
                },
                {
                    image:"../../img/product/6.jpg",
                    name:"Happy Ninja",
                    sale:"Sale",
                    reduced_price:"$30.00",
                    price:"35.00",
                },
                {
                    image:"../../img/product/7.jpg",
                    name:"Hearts Lollipop",
                    sale:"",
                    reduced_price:"",
                    price:"17.00",
                },
                {
                    image:"../../img/product/9.jpg",
                    name:"Lemon Lollipop",
                    sale:"",
                    reduced_price:"",
                    price:"35.00",
                },
                {
                    image:"../../img/product/11.jpg",
                    name:"Limo Lollipop",
                    sale:"",
                    reduced_price:"",
                    price:"32.00",
                },
                {
                    image:"../../img/product/2.jpg",
                    name:"Premium Lollipop",
                    sale:"Sale",
                    reduced_price:"$15.00",
                    price:"9.00",
                },
                {
                    image:"../../img/product/1.jpg",
                    name:"Yami Makaroons", 
                    price:"",
                    detail:"10",
                    price:"17.00", 
                },
            ]
        }
    }
    render() {

        const prodcut = this.state.listproduct.map((listproduct, index) => {
            return <div key={index} className='product-item col-12 col-lg-4 col-md-6 '>
                        <div className={'inner-box ' + `${ this.state.listproduct[index].sale }`}>
                            <div className="product-image">
                                <a className="image" href="/">
                                    <img src={ this.state.listproduct[index].image } alt="/" />
                                </a>
                                <div className="btn-box">
                                    <a href="/">Add to cart</a>
                                </div>
                            </div>
                            <div className="product-infor">
                                <h4><a href="/">{ this.state.listproduct[index].name }</a></h4>
                                <ul className="rating">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                </ul>
                                <p className="price"> 
                                    <span>{ this.state.listproduct[index].reduced_price }</span>
                                    ${ this.state.listproduct[index].price }
                                </p>
                            </div>
                        </div>
                    </div>
        })

        return (
            <>
                <div className="col-lg-9 col-12">
                    <div className="our-shop">
                        <div className="col-12">
                            <div className="our-shop-header">
                                <div className="item-label">Showing all 12 results</div>
                                <Option />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                { prodcut }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
}

export default product;