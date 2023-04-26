import React from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
    return (
        <div className="login">
        <div className="form-container">
            <h1 className="title">My account</h1>
            <div></div>
            <form action="/" className="form">
                <div>
                    <label for="name" className="label">Name</label>
                    <input type="text" id="name" placeholder="Name" className="input input-name"/>
                    <label for="email" className= "label">Email</label>
                    <input type="email" id="email" placeholder="email@example.com" className="input input-email"/>
                    <label for="new-password" className="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password"/> 
                </div>
                <div className="create">
                <input type="submit" value="Create" className="primary-buttom create-button"/>
            </div>
            </form>
        </div>
    </div>
    );
}
export { CreateAccount };