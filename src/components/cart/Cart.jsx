import React from 'react'

const Cart = ({cart_img, cart_title, cart_price}) => {
	return (
		<div className='cart'>
			<img src={cart_img} alt="" />
			<p className="cart_title">{cart_title}</p>
			<p className="cart_price">{cart_price}</p>
		</div>
	)
}

export default Cart