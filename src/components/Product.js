import React, { useEffect, useState } from 'react'

function Product({product, setProductDetails}) {

	return (
		<div>
			<h2 style={{ color: 'red'}}>List of Products</h2>
			<ol>{product.map(item => (
				<li key={item.id}>
					<h5 style={{ color: 'green'}}>Product: {item.name}, Price: {item.price}</h5>
					<button onClick={() => setProductDetails(item)}>Details</button>
				</li>
				))}
			</ol>
		</div>
	)
}

export default Product