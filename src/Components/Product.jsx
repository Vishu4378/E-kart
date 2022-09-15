import React from 'react';
import { Link } from "react-router-dom";
function Product({ photo, category, title, rating, price, id }) {
	return (
		<div>
			<div className=" max-w-80  bg-violet-50 hover:scale-105  transition-transform duration-300  ">
			<Link to={"/products/" + id}> 
				<img src={photo} className="w-full object-cover aspect-video  border border-white " />


				<div className="px-3 py-1">

					<div className="text-gray-500 text-xs"> {category}</div>

					<div className="text-lg font-semibold" >{title} </div>
					<div className="text-red-500">{rating}</div>
					<div className="text-red-800 font-bold text-xs">${price}</div>

					<Link className="text-white border rounded-xl bg-violet-800 font-semibold text-xs px-3  " to={"/products/" + id}> view detail</Link>

				</div>
			</Link>
			</div>
		</div>
	);
}

export default Product;