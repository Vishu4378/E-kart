import React from "react";
import { Link } from "react-router-dom";

function Notfound() {

	return (
		<>
			<div className="items-center  h-full my-16">
				<div className="w-80 gap-y-2 flex flex-col  text-center m-auto">

					<img className="" src="https://www.pngitem.com/pimgs/m/253-2530166_oops-png-transparent-png.png" />

					<p className="font-bold text-lg text-violet-900">404 - PAGE NOT FOUND </p>
					<p className="font-semibold">
						You've found a page that doesn't exist
					</p>

					<Link className="text-white border rounded-2xl bg-violet-700 w-44 item-center font-semibold text-xs font-semibold p-2 mx-auto " to="/">GO TO HOMEPAGE</Link>

				</div>
			</div>
		</>

	)
}
export default Notfound;