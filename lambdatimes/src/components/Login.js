import React, { Component } from 'react';
import Authenticate from '../Authentication/Authentication'; 
import styled from 'styled-components';
import './Login.css';

const LoginPage = props => {
    return (
        <div className="login-wrapper">
            <div className="login-section">
                <h2>Login</h2>
                <form onSubmit={props.updateUser}>
                {/* <TextField> */}
                    <div className="my-inputs">
                        <input
                            className="login-input"
                            type="text"
                            placeholder="Your username.."
                            name="username"
                            value={props.usernameInput}
                            onChange={props.usernameChange}
                        />
                    {/* </TextField> */}
                        <input 
                            className="login-input"
                            type="text"
                            placeholder="Your password.."
                            name="password"
                            value={props.passwordInput}
                            onChange={props.passwordChange}
                        />
                    </div>
                    <div className="my-button">
                        <button className="login-button" onClick={props.updateUser}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// export default Authenticate(LoginPage)
export default LoginPage