import React, { useState, useEffect } from 'react';
import ProductShow from './Productshow';
import Navbar from './Navbar';
import Footer from './Footer';
import Loading from './Loading';

import { getproductlist } from './api';
function Productlistpage() {
	const [products, setProducts] = useState([]);
	const [query, setQuery] = useState('');
	const [sort, setSort] = useState('default');
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const promise = getproductlist();
		promise.then(function(data) {
			setProducts(data)
			setLoading(false)
		});
	}, []);

	const data = products.filter(function(item) {
		const lowerCaseTittle = item.title.toLowerCase();
		const lowerCaseQuery = query.toLowerCase();
		return lowerCaseTittle.indexOf(lowerCaseQuery) != -1;
	});
	console.log(sort);
	if (sort == 'low') {
		data.sort(function(x, y) {
			return x.price - y.price;
		});
	} else if (sort == 'high') {
		data.sort(function(x, y) {
			return y.price - x.price;
		});
	} else if (sort == 'title') {
		data.sort(function(x, y) {
			return x.title < y.title ? -1 : 1;
		});
	}
	function handleQueryChange(event) {
		setQuery(event.target.value);
	}

	function handleSortChange(event) {
		setSort(event.target.value);
	}

	if (loading) {
		return <Loading></Loading>
	}

	return (
		<div className="grow-1 flex flex-col">
			<div className="">

			</div>
			<div className="bg-violet-300 max-py-8">
				<div className=" sm:p-4">
					<div className="m-2 sm:m-4 sm:p-8 bg-white max-w-5xl lg:mx-auto  boder border-white">
						<div className=" flex flex-col items-center sm:flex-row justify-between m-4 ">
							<div className="ml-2">
								<input
									value={query}
									placeholder="search"
									className="border border-gray-600 rounded-md mb-2 pl-2"
									onChange={handleQueryChange}
								/>
							</div>

							<select
								className="border font-semibold border-gray-600 "
								onChange={handleSortChange}
							>
								<option value="default"> sort by default</option>

								<option value="low">sort by price: low to high</option>

								<option value="high"> sort by price: high to low</option>

								<option value="title"> sort by title</option>
							</select>
						</div>
						<ProductShow products={data} />
					</div>
				</div>
			</div>


		</div>
	);
}
export default Productlistpage;
