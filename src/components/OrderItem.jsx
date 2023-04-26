import React from 'react';
import '../styles/OrderItem.scss';
import close from '../assets/icons/icon_close.png'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);
	const handleRemove = product => {
		removeFromCart(product)
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img className='close-order' src={close} alt="close" onClick={()=> handleRemove(product)} />
		</div>
	);
}

export { OrderItem };