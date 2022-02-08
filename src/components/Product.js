import React, { useEffect, useState } from 'react'
import ProductDetails from './ProductDetails'

function Product() {
	
	const [product, setProduct] = useState(
		[
			{
				id: 1,
				name: 'Rice',
				description: 'High Quality Bashmoti Chal',
				price: '90 Tk per KG',
				category: 'Grocery',
				button_name: false,
			},
			{
				id: 2,
				name: 'SOAP',
				description: 'Indian Lux Soap',
				price: '50 Tk',
				category: 'Grocery',
				button_name: false,
			},
			{
				id: 3,
				name: 'Samsung S20FE',
				description: 'Official Samsung Phone',
				price: '50,000 Tk',
				category: 'Electronics',
				button_name: false,
			}
		]
	)

	const[productId, setProductId] = useState(0)

	const[showDetails, setShowDetails] = useState(false)


	
	
	return (
		<div>
			<h2 style={{ color: 'red'}}>List of Products</h2>
			<ol>{product.map(item => (
				<li key={item.id}>
					<h5 style={{ color: 'green'}}>Product: {item.name}, Price: {item.price}</h5>
					<button onClick={() => {setShowDetails(!showDetails); item.button_name = !item.button_name }}>Details</button>
					{item.button_name && (<ProductDetails product={item} />)}
				</li>
				))}
			</ol>
		</div>
	)
}

export default Product