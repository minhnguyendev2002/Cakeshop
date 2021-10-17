import React, { Component } from "react";
import '../pricefilter/filter.css';
import $ from 'jquery';

$(document).ready(function() {
    console.log($('.left-track').width())
})

class filter extends Component {
    render() {
        return (
            <>
                <div className='filter-box'>
                    <h3>Price Filter</h3>
                    <div className='slide-ranger'>
                        <div className='input-range'>
                            <input className='left-track' type="range" min="1" max="100" />
                            <input className='right-track' type="range" min="1" max="100" />
                        </div>
                        <div className='filter-footer'>
                            <div className='filter-price'>
                                <span>Price: </span>
                                <div className='change-input'>
                                    <input className='min-value' type='text' placeholder='0' />
                                    <input className='max-value' type='text' placeholder='90'/>
                                </div>
                                <span>$</span>
                            </div>
                            <div className='filter-action'>
                                <a href='/'>Filter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default filter;
