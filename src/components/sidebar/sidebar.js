import React, { Component } from "react";
import Search from '../search/search';
import Cart from '../cart/cart';
import Filter from '../pricefilter/filter';
import Tags from './tags/tags';

class nav extends Component {
    render() {
        return (
            <>
                <div className="col-lg-3 col-12">
                    <Search />
                    <Cart />
                    <Filter />
                    <Tags />
                </div>
            </>
        )
    }
}

export default nav;