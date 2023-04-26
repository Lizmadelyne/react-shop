import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout'
import { Login } from '../pages/Login';
import { RecoveryPassword } from '../pages/RecoveryPassword';
import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import { Checkout } from '../pages/CheckOut';
import { CreateAccount } from '../pages/CreateAccount';
import { MyAccount } from '../pages/MyAccount';
import { NewPassword } from '../pages/NewPassword';
import { Order } from '../pages/Order';
import { SendEmail } from '../pages/SendEmail';
import { AppContext } from '../context/AppContext';
import { useInitialState } from '../hooks/useInitialState';
import '../styles/global.css';
const App = () => {
    const initialState = useInitialState();
	return (
        <AppContext.Provider value={initialState}>
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/recovery-password"element={<RecoveryPassword/>} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/new-password" element={<NewPassword />} />
                <Route path="/order" element={<Order />} />
                <Route path="/send-email" element={<SendEmail />} />
                <Route path="*"element={<NotFound />} />
            </Routes>
        </Layout>
    </BrowserRouter>
    </AppContext.Provider>
	);
}

export default App;



