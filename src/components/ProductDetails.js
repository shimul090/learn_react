import React from 'react'

function ProductDetails({product}) {
	return (
		<div>
			<p>Product Name:{product.name}</p>
			<p>Description:{product.description}</p>
			<p>Price:{product.price}</p>
			<p>Category:{product.category}</p>
		</div>
	)
}

export default ProductDetails;