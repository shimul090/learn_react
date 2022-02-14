import React from 'react'

function ProductDetails({selectedProduct, setProductDetails}) {
	return (
		<div>
		<h2 className="mt-5 mb-3" style={{ color: 'red'}}>Product Details</h2>
			<p><strong>Product Name: </strong>{selectedProduct.name}</p>
			<p><strong>Description: </strong>{selectedProduct.description}</p>
			<p><strong>Price: </strong>{selectedProduct.price}</p>
			<p><strong>Category: </strong>{selectedProduct.category}</p>
			<button className="btn btn-success" onClick={() => setProductDetails(null)}>Back to product list</button>
		</div>
	)
}

export default ProductDetails;