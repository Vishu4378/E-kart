import React from 'react';
import Product from './Product';

function ProductShow({ products }) {
	return (
		<div className="space-y-3 sm:space-y-0 sm:m-0 sm:grid gap-7 grid-cols-3 ">
			{products.map(function(item) {
				return (

					<div >
						<Product price={item.price} photo={item.thumbnail} title={item.title} category={item.brand} id={item.id} key={item.title} />


					</div>
				);
			})}
		</div>
	)
}
export default ProductShow;