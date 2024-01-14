import React from 'react'
import styleHeader from './Header.module.css'
import Cart from '../cart/Cart'
import img_1 from '../../assets/img.avif'


const Header = () => {
	return (
		<div className='header'>
		<div className={`${styleHeader.box} ${styleHeader.box2}`}>
			htis is box
		</div>
		<div className="box">
			htis is box
		</div>
		<div className={styleHeader.box}>
			htis is box
		</div>
		<div className="box">
			htis is box
		</div>

		
		</div>
	)
}

export default Header