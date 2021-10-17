import React, { Component } from "react";
import '../shop/shop.css';
import Product from '../../components/product/product';
import SideBar from '../../components/sidebar/sidebar';


class shop extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <Product />
                        <SideBar />
                    </div>
                </div>
            </>
        )
    }
    
}

export default shop;