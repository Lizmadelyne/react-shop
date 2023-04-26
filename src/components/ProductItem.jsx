import { useContext } from 'react';
import React from 'react';
import { AppContext } from '../context/AppContext';
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';
import '../styles/ProductItem.scss';

//aqui vamos a usar el hook usestate

const ProductItem = ( { product }) => {
const { addToCart } = useContext(AppContext);

const handleClick = (item) =>{
	addToCart(item);
}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addToCartImage} alt="" />
				</figure>
			
			</div>
		</div>
	);
}

export { ProductItem };

