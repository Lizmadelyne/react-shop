import React, { useState, useContext } from 'react';
import '../styles/Header.scss';
import { Menu } from '../components/Menu';
import menu  from '../assets/icons/icon_menu.svg';
import logo  from '../assets/logos/favicon_yard_sale.svg';
import { AppContext } from '../context/AppContext';
import { MyOrder } from '../containers/MyOrder';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';


const Header = () => {
    const [toggle, setToggle]= useState(false);
    const { state } = useContext(AppContext);
    const [toggleOrder, setToggleOrder] = useState(false)

    const handleToggle = () =>{
        setToggle(!toggle);
    }
   return (
        <nav>
        <img src={menu} alt="menu" className="menu"/>
        <div className="navbar-left">
            <img src={logo} alt="logo" className="nav-logo"/>
            <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div className="navbar-right">
            <ul>
                <li className="navbar-email" onMouseOver={handleToggle}>example@gmail.com</li>
                <li className="navbar-shopping-cart" onClick={() => setToggleOrder(!toggleOrder)}>
                    <img src={shoppingCart} alt="shopping cart"/>
                    {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                </li>
            </ul>
        </div>
        {toggle && <Menu /> }
        {toggleOrder && <MyOrder/>}
    </nav>

    );
}
export { Header };