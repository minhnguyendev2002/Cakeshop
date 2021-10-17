import React, { Component } from "react";
import './tags.css';

class tag extends Component {
    render() {
        return (
            <>
                <div className='tags-box'>
                    <h3>Tags</h3>
                    <ul>
                        <li><a href='/'>Bars</a></li>
                        <li><a href='/'>Caramels</a></li>
                        <li><a href='/'>Chocolate</a></li>
                        <li><a href='/'>Fruit</a></li>
                        <li><a href='/'>Nuts</a></li>
                        <li><a href='/'>Toffees</a></li>
                        <li><a href='/'>Top Rated</a></li>
                        <li><a href='/'>Truffels</a></li>
                    </ul>
                </div>
            </>
        )
    }
}

export default tag;