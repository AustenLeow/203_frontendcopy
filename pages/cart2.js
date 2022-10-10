import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
// import Image from 'next/image';
import { XCircleIcon } from "@heroicons/react/outline/esm";

export default function cart2() {
  const total = 0;
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart();
    fetchCartItemsHandler();
    fetchItemsHandler();
    updateItemQty(4,1);
  }, []);

  function fetchItemsHandler() {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    console.log(items);
    setItems(items);
  }

  const countItemStock = (product) => {
    fetch(`http://localhost:8080/api/v1/items/${product.id}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      // proxy: {
      //   host: 'http://localhost:/8080/api/v1/items',
      //   port: 8080
      // }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        // console.log(response); // now this is the body of the response
        // return console.log(response.quantity);
        return response.quantity;
      })
      .then((product) => {
        // setCart(product);
        // console.log("here");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function updateItemQty(item, qty) {
    const response = await fetch(
      `http://localhost:8080/api/v1/cart/update/${item.id}/${qty}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        // body: JSON.stringify(item, qty)
      }
    )
      .then((response) => console.log(response.text()))
      .then((product) => {
        console.log(product);
        getCart();
        fetchCartItemsHandler();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getCart() {
    fetch("http://localhost:8080/api/v1/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((product) => {
        // setCart(product);
        // console.log();
        setCart(product);
        localStorage.setItem("myCart", JSON.stringify(product));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function fetchCartItemsHandler() {
    const cart = JSON.parse(localStorage.getItem("myCart") || "[]");
    console.log(cart);
    setCart(cart);
  }

  const removeItemHandler = (product) => {
    fetch(`http://localhost:8080/api/v1/cart/delete/${product.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.text())
      .then((product) => {
        console.log(product);
        getCart();
        fetchCartItemsHandler();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout title="cart">
      <h1 className="text-xl p-7">Your Shopping Cart</h1>
      {cart.length == 0 ? (
        <div className="px-7">
          Cart is empty.{" "}
          <a className="text-[#687259]" href="/marketplace">
            Go shopping
          </a>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5 px-7">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-right">item</th>
                  <th className="px-5 text-right"></th>
                  <th className="px-5 text-right">price</th>
                  <th className="px-5 text-right">quantity</th>
                  <th className="px-5 text-right">subtotal</th>
                  <th className="px-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartitem) => (
                  <tr key={cartitem.item.id} className="border-b">
                    <td className="p-5 text-right">{cartitem.item.itemName}</td>
                    <td className="p-5 text-right">
                      <img
                        src={cartitem.item.url}
                        alt={cartitem.item.itemName}
                        className="flex items-center"
                        width={100}
                        height={100}
                      ></img>
                    </td>
                    <td className="p-5 text-right">{cartitem.item.price}</td>
                    <button
                      onClick={() =>
                        updateItemQty(cartitem.item, cartitem.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <td
                      className="p-5 text-right"
                      onChange={() =>
                        updateItemQty(cartitem.item, cartitem.quantity)
                      }
                    >
                      {cartitem.quantity}
                    </td>
                    <button
                      onClick={() =>
                        updateItemQty(cartitem.item, cartitem.quantity - 1)
                      }
                    >
                      -
                    </button>
                    {/* <td className='p-5 text-center'>
                                            <select
                                                value={cartitem.quantity}
                                                onChange={(e) =>
                                                    //updateCartHandler(item, e.target.value)
                                                     updateItemQty(cartitem.item, e.target.quantity)
                                                }
                                            >
                                                {[...Array(items.item).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </td> */}
                    <td className="p-5 text-right">{cartitem.subtotal}</td>
                    <td className="p-5 text-center">
                      <button onClick={() => removeItemHandler(cartitem.item)}>
                        <XCircleIcon className="h-5 w-5"></XCircleIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5">
            <ul>
              {/* <li>
                                <div className='pb-3 text-xl'>
                                    Subtotal ${cartitem.subtotal}
                                </div>
                            </li> */}
              {/* check out */}
              <li>
                <button className="primary-button w-full">Check Out</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}

/////////// things we have tried to get cart ...

// const items = data.map((cart) => {
//     return {
//         id: cart.item.id,
//         itemName: cart.item.itemName,
//         price: cart.item.price,
//         url: cart.item.url,
//         quantity: cart.quantity,
//         subtotal: cart.subtotal
//     };
// });

// const fetchCartItemsHandler = useCallback(async () => {

// setError(null);
// try {
//     const res = await fetch('http://localhost:8080/api/v1/cart', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 "Authorization": "Bearer " + localStorage.getItem("token")
//             }
//         });
//     if (!res.ok) {
//         throw new Error('Something went wrong');
//     }
//     const data = await res.json();
//     // const data = JSON.stringify(dataobj);
//     // const itemlist = [];
//     console.log(data);

// for (const key in data) {
//     itemlist.push({
//         id: data[key].item.id,
//         itemName: data[key].item.itemName,
//         price: data[key].item.price,
//         url: data[key].item.url,
//         quantity: data[key].quantity,
//         subtotal: data[key].subtotal
//     });
//     // }
//     setCartItems(data);
// }
// catch (error) {
//     setError(error.message);
// }
// console.log(cartItems);
