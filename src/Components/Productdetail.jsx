import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import allData from "./Newdata";
import { Link } from "react-router-dom";
import { getproductdetail } from "./api";
import Notfound from './Notfound';
import Loading from './Loading';

function Productdetail({ addToCart }) {
	const params = useParams();
	const sku = +(params.id);

	const [loading, setLoading] = useState(true)
	const [product, setProduct] = useState([])
	const [count, setCount] = useState(1);
	useEffect(function() {
		const promise = getproductdetail(sku);
		promise.then(function(data) {
			setProduct(data);
			setLoading(false);
		});
		promise.catch(function(err) {
			console.log("err", err)
			setLoading(false)
			setProduct([])
		});
	}, [sku, count])


	if (loading) {

		return <Loading />
	}
	if (sku>100) {
		console.log("data wala hai")
		return <Notfound />
	}

	function handleCount(event) {
		setCount(+event.target.value)
	}
	function handleCart() {
		addToCart(sku, count);
		
	}

	console.log("value count", count)
	return (
		<>
			<div className="flex grow-1 flex-col m-auto sm:ml-7 sm:m-0 mt-5">
				<Link className="w-8" to="/"><img src="https://img.icons8.com/fluency-systems-filled/48/000000/arrow-pointing-left.png" /></Link>
				<div className="flex flex-col justify-center  p-4 max-w-64 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-gray-100  rounded shadow">
					<img src={product.thumbnail} className="w-60" />
					<div className="ml-2 ">
						<div className="text-2xl font-semibold">{product.title}</div>
						<div className="text-sm text-red-800 font-bold">${product.price}</div>

						<div className="text-sm  font-semibold">{product.description}</div>
						<div className="mt-3">
							<input className="border border-gray-500 w-10 h-5 mr-2 " type="number" value={count} onChange={handleCount} placeholder="1" />
							<button className="px-5 py-1 hover:bg-violet-800   rounded-lg text-xs font-semibold text-white bg-violet-700" onClick={handleCart}>ADD TO CART</button>
						</div>
					</div>

				</div>

			</div>
			<div className="flex justify-between m-4 sm:m-20 ">
				<Link className="font-bold text-sm" to={"/products/" + (sku - 1)}><img src="https://img.icons8.com/metro/26/000000/long-arrow-left.png" />Previous</Link>
				<Link to={"/products/" + (sku + 1)} className="font-bold text-sm"><img src="https://img.icons8.com/metro/26/000000/long-arrow-right.png" />Next</Link>
			</div>
		</>

	);
}
export default Productdetail;