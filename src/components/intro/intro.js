import React, { Component } from "react";
import '../intro/intro.css';

class intro extends Component {
    render() {
        return (
            <>
                <div className='intro-container'>
                    <h1>{ this.props.now }</h1>
                    <ul>
                        <li>{ this.props.past }</li> {/** home/path/link*/}
                        <li>/</li>
                        <li>{ this.props.now }</li>
                    </ul>
                </div>
            </>
        )
    }
}

export default intro;