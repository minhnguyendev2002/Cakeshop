import React, { Component } from "react";
import '../account/account.css';


class account extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className='accoont-box'>
                        <h2>Login</h2>
                        <div className='from-input'>
                            <div className='user-name'>
                                <label htmlFor='user-name'>Username or email address *</label>
                                <input type='text' id='user-name' name='user-name'/>
                            </div>
                            <div className='user-password'>
                                <label htmlFor='user-password'>Password *</label>
                                <input type='text' id='user-password' name='user-name'/>
                            </div>

                            <div className='remember'>
                                <input type='checkbox' id='check' />
                                <label htmlFor='check'>Remember me</label>
                            </div>

                            <button>Log In</button>
                            
                            <a href='/'>Lost your password?</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
}

export default account;