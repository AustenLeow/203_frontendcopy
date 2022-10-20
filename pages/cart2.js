import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
// import Image from 'next/image';
import {
  XCircleIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/outline/esm";
import Modal from "../components/Modal";
import { Router } from "next/router";
import { useRouter } from "next/router";

export default function cart2() {
  const [total, setTotal] = useState(0.0);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  function handleOnClose() {
    setShowModal(false);
    router.push("/marketplace");
  }

  useEffect(() => {
    getCart();
    fetchCartItemsHandler();
    fetchItemsHandler();
    getTotal();
    // updateItemQty(4, 1);
  }, []);

  function fetchItemsHandler() {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    console.log(items);
    setItems(items);
  }
  function getTotal() {
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
        setCart(product);
        let x = 0;
        console.log(product);
        localStorage.setItem("myCart", JSON.stringify(product));
        product.map(
          (cartitem) =>
            (x += cartitem.subtotal)
            // console.log(total)
        );
        console.log(x);
        setTotal(x);
        return total;
      })
      .catch((err) => {
        console.log(err);
      });
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
        getTotal();
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
        getTotal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout title="Your shopping cart">
       
      {cart.length == 0 ? (
        <div className="flex flex-col justify-center items-center">
          <img
                alt=" "
                src="/emptycart.png"
                height={300}
                width={300}
                className="ml-3 pt-16"
              />
          <h1 className="product-title pt-8 pb-5">Your shopping cart is empty :( {" "}</h1>
          <a className="text-[#687259] hover:underline no-underline" href="/marketplace">
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

                    <td
                      className="p-5 text-right"
                      onChange={() =>
                        updateItemQty(cartitem.item, cartitem.quantity)
                      }
                    >
                      <button
                        onClick={() => {
                          if (cartitem.quantity > 1) {
                            updateItemQty(cartitem.item, cartitem.quantity - 1);
                          } else {
                            removeItemHandler(cartitem.item);
                          }
                        }}
                      >
                        <MinusCircleIcon className="h-5 w-5"></MinusCircleIcon>
                      </button>
                      &nbsp;{cartitem.quantity}&nbsp;
                      <button
                        onClick={() =>
                          updateItemQty(cartitem.item, cartitem.quantity + 1)
                        }
                      >
                        <PlusCircleIcon className="h-5 w-5"></PlusCircleIcon>
                      </button>
                    </td>

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
            <div>
              <div className="pb-3 text-xl font-bold">Total: ${total}</div>
            </div>

            <div>
              <button className="button w-full"> 
              
              Check Out</button>
            </div>
            <p className="p-2"></p>
            <div>
              <button
                className="button w-full"
                onClick={() => setShowModal(true)}
              >
                Donate to charity
              </button>
            </div>
            <Modal onClose={handleOnClose} visible={showModal} />
          </div>
        </div>
      )}
    </Layout>
  );
}
