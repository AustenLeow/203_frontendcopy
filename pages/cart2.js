import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import {
  XCircleIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/outline/esm";
import Modal from "../components/DonateModal";
import CheckOutModal from "../components/CheckOutModal";
import { useRouter } from "next/router";

export default function Cart2() {
  const [total, setTotal] = useState(0.0);
  const [totalCarbonSavings, setTotalCarbonSavings] = useState(0.0);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showCheckOutModal, setShowCheckOutModal] = useState(false);
  const router = useRouter();

  function handleOnClose() {
    setShowCheckOutModal(false);
    router.push("/marketplace");
  }

  function handleOnCloseClearCart() {
    setShowCheckOutModal(false);
    // clearCart();
    router.push("/marketplace");
  }

  // function clearCart() {
  //   // localStorage.setItem("myCart", JSON.stringify([]));
  //   for(var i = 0; i < localStorage.getItem.length; i++) {

  //       removeItemHandler(i);
  //     }
  // }

  useEffect(() => {
    getCart();
    fetchCartItemsHandler();
    fetchItemsHandler();
    getTotal();
    getTotalCarbonSavings();
    getQuantity();
    // updateItemQty(4, 1);
  }, []);

  function fetchItemsHandler() {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    console.log(items);
    setItems(items);
  }

  function getQuantity() {
    fetch("http:// localhost:8080/api/v1/cart", {
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
          (cartitem) => (x += cartitem.quantity)
          // console.log(total)
        );
        //  console.log(x);
        setQuantity(x);
        return quantity;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTotal() {
    fetch("http:// localhost:8080/api/v1/cart", {
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
          (cartitem) => (x += cartitem.subtotal)
          // console.log(total)
        );
        //  console.log(x);
        setTotal(x);
        return total;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTotalCarbonSavings() {
    fetch("http:// localhost:8080/api/v1/cart", {
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
          (cartitem) => (x += cartitem.carbontotal)
          // console.log(total)
        );
        //  console.log(x);
        setTotalCarbonSavings(x);
        return total;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const countItemStock = (product) => {
    fetch(`http:// localhost:8080/api/v1/items/${product.id}`, {
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
      `http:// localhost:8080/api/v1/cart/update/${item.id}/${qty}`,
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
        getTotalCarbonSavings();
        getQuantity();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getCart() {
    fetch("http:// localhost:8080/api/v1/cart", {
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
    fetch(`http:// localhost:8080/api/v1/cart/delete/${product.id}`, {
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
        getTotalCarbonSavings();
        getQuantity();
        reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function reload() {
    setTimeout(function () {
      location.reload();
    }, 0);
  }

  return (
    <Layout title="Your shopping cart">
      <div className="p-10">
        <h1 className="py-3 header-text text-center m-auto">
          Your Shopping Cart ({quantity})
        </h1>
      </div>

      {cart.length == 0 ? (
        <div className="flex flex-col justify-center items-center">
          <img
            alt=" "
            src="/emptycart.png"
            height={300}
            width={300}
            className="ml-3 pt-16"
          />
          <h1 className="product-title pt-8 pb-5">
            Your shopping cart is empty :({" "}
          </h1>
          <a
            className="text-[#687259] hover:underline no-underline"
            href="/marketplace"
          >
            Go shopping
          </a>
        </div>
      ) : (
        <div className="grid w-5/6 lg:grid-cols-4 place-items-center">
          <div className="overflow-x-auto lg:col-span-3 pr-5 pl-20 ">
            <table className="table-auto min-w-full">
              <thead className=" uppercase">
                <tr>
                  <th className="py-3 px-6">Item</th>
                  <th className="py-3 px-6">Price</th>
                  <th className="py-3 px-6">Quantity</th>
                  <th className="py-3 px-6">Carbon savings</th>
                  <th className="py-3 px-6">Subtotal</th>
                  <th className="py-3 px-6">Delete</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartitem) => (
                  <tr key={cartitem.item.id} className="border-b">
                    <div className="text-center">
                      <td className="py-4 px-6 font-base text-gray-900 whitespace-nowrap dark:text-white">
                        <img
                          src={cartitem.item.url}
                          alt={cartitem.item.itemName}
                          className="flex items-center rounded-full object-contain shadow-2xl"
                          width={100}
                          height={100}
                        ></img>
                        {cartitem.item.itemName}
                      </td>
                    </div>
                    <td className="p-5 text-center">
                      {" "}
                      🌱 {cartitem.carbontotal}
                    </td>
                    {/* <td className="p-5 text-right">
                      <img
                        src={cartitem.item.url}
                        alt={cartitem.item.itemName}
                        className="flex items-center"
                        width={100}
                        height={100}
                      ></img>
                    </td> */}
                    <td className="p-5 text-center"> ${cartitem.item.price}</td>

                    <td
                      className="p-5 text-center"
                      onChange={() =>
                        updateItemQty(cartitem.item, cartitem.quantity)
                      }
                    >
                      <button
                        onClick={() => {
                          if (cartitem.quantity > 1) {
                            updateItemQty(
                              cartitem.item,
                              cartitem.quantity - 1
                            ) && reload();
                          } else {
                            removeItemHandler(cartitem.item) && reload();
                          }
                        }}
                      >
                        <MinusCircleIcon className="h-5 w-5"></MinusCircleIcon>
                      </button>
                      &nbsp;{cartitem.quantity}&nbsp;
                      <button
                        onClick={() =>
                          updateItemQty(cartitem.item, cartitem.quantity + 1) &&
                          reload()
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

                    <td className="p-5 text-center"> 🌱 {cartitem.carbontotal}cm<sup>3</sup></td>
                    <td className="p-5 text-center">${cartitem.subtotal}</td>
                    <td className="p-6 text-center">
                      <button onClick={() => removeItemHandler(cartitem.item)}>
                        <XCircleIcon className="h-5 w-5"></XCircleIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 block rounded-xl border border-gray-200 shadow-2xl h-place-items-center">
            <div>
              <div className="pb-3 text-xl font-bold"> 🛍 Total: ${total}</div>
            </div>
            <div>
              <div className="pb-3 text-xl font-bold">
                {" "}
                🌱 Total Carbon Savings: {totalCarbonSavings}cm<sup>3</sup>{" "}
              </div>
            </div>
            <div>
              <button
                className="button w-full"
                onClick={() => setShowCheckOutModal(true)}
              >
                Check Out
              </button>
            </div>
            <p className="p-2"></p>
            <div>
              <button
                className="button w-full"
                onClick={() => setShowDonateModal(true)}
              >
                Donate to charity
              </button>
            </div>
            <CheckOutModal
              onClose={handleOnCloseClearCart}
              visible={showCheckOutModal}
            />
            <Modal onClose={handleOnClose} visible={showDonateModal} />
          </div>
        </div>
      )}
    </Layout>
  );
}
