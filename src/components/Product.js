import React, { useEffect, useState } from 'react'

function Product({product, setProductDetails}) {

	return (
		<div>
			<h2 className="mt-5 mb-3" style={{ color: 'red'}}>List of Products</h2>
			<table class="table table-striped table-bordered">
				<thead>
					<tr>
						<th>Serial</th>
						<th>Name</th>
						<th>Price</th>
						<th>Details</th>
					</tr>
				</thead>
				<tbody>{product.map(item => (
					<tr>
						<td>{item.id}</td>
						<td>{item.name}</td>
						<td>{item.price}</td>
						<td><button onClick={() => setProductDetails(item)}>See Details</button></td>
					</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Product