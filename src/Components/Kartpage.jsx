import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { getproductdetail } from "./api";
function Kartpage({ Kartdata }) {
  const [products, setProducts] = useState([]);
  const [Total, setTotal] = useState(0);
  const arr = Object.entries(Kartdata);
  //   console.log(arr)
  useEffect(() => {
    const promises = arr.map((item) => {
      const [key, value] = item;
      const res = getproductdetail(key);
      //   console.log(item)
      const totalPriceArr = products.map((item) => {
        const price = item.price * Kartdata[item.id];
        return price;
      });
    
      const Subtotal = totalPriceArr.reduce((previous, current) => {
        return previous + current;
      }, 0);
    
      setTotal(Subtotal)
      return res;
      
    });

    Promise.all(promises).then((res) => {
      // console.log(res)
      setProducts(res);
    });
  }, [products]);

// function removeItem(){

// }
  
  

  return (
    <>
      <div className="bg-gray-200 w-full p-8 h-full">
        <div className="bg-white w-full h-full p-8 ">
          <table className="border   border-collapse">
            <tr className="border hover:hover:bg-violet-100 bg-violet-200">
              <th className="px-4 py-2">Product</th>
              <th className="">Price</th>
              <th className="">Quantity</th>
              <th className="px-8">Subtotal</th>
            </tr>

            {products.map((product, i) => {
              return (
                <tr className="border " key={i}>
                  <td className="px-16 py-2 flex flex-row gap-4">
                    <p className=" my-auto">
                      <i className="bx bxs-x-circle" ></i>
                    </p>
                    <img
                      src={product.thumbnail}
                      className={"w-28 mx-5 object-contain rounded-md  "}
                    ></img>
                    <h2 className="my-auto  font-semibold">{product.title}</h2>
                  </td>
                  <td className="px-8 font-semibold text-xs">
                    ₹ {product.price}
                  </td>

                  <td className="px-8 text-sm ">
                    <p className="border px-4">{Kartdata[product.id]}</p>
                  </td>

                  <td className="px-28 font-semibold text-sm">
                    ₹ {Kartdata[product.id] * product.price}
                  </td>
                </tr>
              );
            })}

            <tr className="border">
              <td className="px-16 py-8">
                <div className="space-x-2">
                  <input
                    className="border rounded pl-3 text-sm"
                    placeholder="Coupon code"
                  ></input>
                  <Link
                    className="bg-violet-700 hover:bg-violet-800 text-white text-xs font-semibold px-5 py-1 rounded"
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
                    className="bg-violet-700 hover:bg-violet-800 text-white text-xs font-semibold px-5 py-1.5 rounded"
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
                <p className="font-semibold">Cart Totals</p>
              </tr>
              <tr className="border">
                <td>Subtotal</td>
                <td className="font-semibold text-sm">₹ {Total}</td>
              </tr>
              <tr className="border">
                <td>Total</td>
                <td className="font-semibold text-sm">₹ {Total}</td>
              </tr>
              <tr className="border ">
                <td className="py-4  ">
                  <div className="mx-auto">
                  <Link
                    className="bg-violet-700 hover:bg-violet-800 text-white text-xs font-semibold px-12 py-1.5 rounded-sm"
                    to=""
                  >
                    PROCEED TO CHECKOUT
                  </Link>
                  </div>
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
