import React, { Component } from "react";
import '../search/search.css';

class search extends Component {
    render() {
        return (
            <>
                <div className='search-from'>
                    <div className='search'>
                        <input type='text' name='search-product' placeholder='Search product...'/>
                        <button type='submit'><i className='fas fa-search'></i></button>
                    </div>
                </div>
            </>
        )
    }
}

export default search;