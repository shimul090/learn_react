import React from 'react'

function ProductDetails({selectedProduct, setProductDetails}) {
	return (
		<div>
			<p>Product Name:{selectedProduct.name}</p>
			<p>Description:{selectedProduct.description}</p>
			<p>Price:{selectedProduct.price}</p>
			<p>Category:{selectedProduct.category}</p>
			<button onClick={() => setProductDetails(null)}>Back to product list</button>
		</div>
	)
}

export default ProductDetails;