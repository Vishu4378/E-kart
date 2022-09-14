import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { getproductdetail } from "./api";
function Kartpage({ Kartdata }) {
  const [products, setProducts] = useState([]);

  const arr = Object.entries(Kartdata);

  useEffect(() => {
    const promises = arr.map((item) => {
      const [key, value] = item;
      const res = getproductdetail(key);
      return res;

    });

    Promise.all(promises).then((res) => {
        console.log(res)
      setProducts(res);
    });

  }, []);
console.log(products)
  return (
    <>
      <div className="bg-gray-200 w-full p-8 h-screen">
        <div className="bg-white w-full h-full p-8 ">
          <table className="border   border-collapse">
            <tr className="border ">
              <th className="px-4">Product</th>
              <th className="">Price</th>
              <th className="">Quantity</th>
              <th className="px-8">Subtotal</th>
            </tr>
            {products.map((product, index) => {
              return (
                <tr className="border p-3" key={index}>
                  <td className="px-16 flex flex-row gap-4">
                    <p className=" my-auto"><i className='bx bxs-x-circle'></i></p>
                    <img
                      src={product.images[0]}
                      className={"w-28 mx-5 object-contain rounded-md  "}
                    ></img>
                    <h2>{product.title}</h2>
                  </td>
                  <td className="px-8">{product.price}</td>
           
                  <td className="px-8">{ Kartdata[product.id] }</td>
                  
                  <td className="px-28">{product.stock * product.price}</td>
                </tr>
              );
            })}
            <tr className="border">
              <td className="px-16">
                <div className="space-x-2">
                  <input
                    className="border rounded pl-3 text-sm"
                    placeholder="Coupon code"
                  ></input>
                  <Link
                    className="bg-violet-700 text-white text-xs font-semibold px-5 py-1 rounded"
                    to=""
                  >
                    APPLY COUPON
                  </Link>
                </div>
              </td>
              <td className="px-8"></td>
              <td className="px-8"></td>
              <td className="px-16 py-2">
                {" "}
                <div>
                  <Link
                    className="bg-violet-700 text-white text-xs font-semibold px-5 py-1.5 rounded"
                    to=""
                  >
                    UPDATE CART
                  </Link>
                </div>
              </td>
            </tr>
          </table>
          <div className="flex justify-between">
            <span></span>
            <table className="border w-1/4 mt-4 mr-40 ">
              <tr className="border">
                <p>Cart Totals</p>
              </tr>
              <tr className="border">
                <td>Subtotal</td>
                <td>0</td>
              </tr>
              <tr className="border">
                <td>Total</td>
                <td>0</td>
              </tr>
              <tr className="border ">
                <td className="py-3">
                  <Link
                    className="bg-violet-700 text-white text-xs font-semibold px-16 py-1.5 rounded-sm"
                    to=""
                  >
                    PROCEED TO CHECKOUT
                  </Link>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kartpage;
