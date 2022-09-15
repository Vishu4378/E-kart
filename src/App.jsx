import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Productdetail from './Components/Productdetail';
import Productlistpage from './Components/Productlistpage';
import Notfound from './Components/Notfound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Kartpage from './Components/Kartpage';
function App() {

	const savedDataString = localStorage.getItem("myCart") || "{}";
	const savedDataObj = JSON.parse(savedDataString);
	console.log("SAVEDDATA",savedDataObj)
	const [cart, setCart] = useState(savedDataObj);

	function addToCart(productId, count) {
		console.log(productId, count)
		const oldcount = cart[productId] || 0;
		const storeData = { ...cart, [productId]: oldcount + count };
		setCart(storeData)
		
		const cartString = JSON.stringify(storeData)
		localStorage.setItem("myCart", cartString);
	}
	const newcart = Object.keys(cart).reduce((previous, current) => {
		return previous + cart[current];
	}, 0)
	// console.log("keys",Object.keys(cart))
	return (
		<>
			<Navbar productCount={newcart} ></Navbar>
			<div className="grow-1 flex flex-1 flex-col">
				<Routes>
					<Route index element={<Productlistpage />}></Route>
					<Route path="/kart" element={<Kartpage Kartdata={savedDataObj} />}></Route>
					<Route path="/products/:id/" element={<Productdetail addToCart={addToCart} />}></Route>
					<Route path="*" element={<Notfound />}></Route>
				</Routes>
			</div>
			<Footer></Footer>
		</>
	);
}
export default App;