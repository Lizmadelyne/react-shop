import React from 'react';

const NewPassword = () =>{
    return(
        <div className="login">
        <div className="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your acccount</p>
            <form action="/" className="form"><label for="password" className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input input-password"/>

                <label for="new-password" classNameName="label">Password</label>
                <input type="password" id="new-password" placeholder="*********" className="input input-password"/>
                <input type="submit" value="confirm" className="primary-buttom login-buttom"/>
            </form>
        </div>
    </div>
    );
}

export { NewPassword }