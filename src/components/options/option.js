import React, { Component } from "react";
import $ from 'jquery';
import '../options/option.css';

$(document).ready(function() {
    $('.options h2').click(function() {
        $('.options ul').toggleClass('active')
    })

    $('.options ul li').click(function() {
        $('.options h2').html($(this).html())
        $('.options ul').toggleClass('active')
    })
})

class option extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            listoption : [
                {
                    option:"Sort by popularity",
                },
                {
                    option:"Sort by average rating",
                },
                {
                    option:"Sort by newness",
                },
                {
                    option:"Sort by price: low to high",
                },
                {
                    option:"Sort by price: high to low",
                },
            ]
        }
    }
    render() {

        const options = this.state.listoption.map((listoption, index) => {
            return <li key={ index }>{ this.state.listoption[index].option }</li>
        })

        return (
            <>
                <div className="options">
                    <h2>Pleas choose... <span><i className="fas fa-chevron-down"></i></span></h2>
                    <ul>{ options }</ul>
                </div>
            </>
        )
    }
}

export default option;