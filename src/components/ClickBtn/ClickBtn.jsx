// import React, { useState } from 'react'
// import './ClickBtn.css'

// const ClickBtn = () => {
// 	const [clicked, setClicked] = useState(false)

// 	const ClickMe = () => {
// 		console.log('Кликнули на кнопку!!!');
// 		setClicked(!clicked)
// 	}


// 	const blockClassName = clicked ? 'clickBlock blockActive' : 'clickBlock'

// 	return (
// 		<div className={blockClassName}>
// 			<button onClick={ClickMe}>
// 				Нажмите на меня 
// 			</button>
// 		</div>
// 	)
// }

// export default ClickBtn


import React, { useState } from 'react'

const ClickBtn = () => {
	const [count, setCount] = useState(0)

	const countClick= () => {
		setCount(count + 1)
 }	
 
 return (
		<div>
		<h1>Count: {count}</h1>
		<button onClick={countClick}>
			+
		</button>
		</div>
	)
}

export default ClickBtn