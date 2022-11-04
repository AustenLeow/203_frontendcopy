import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

export default function Marketplace() {
  const [items, setItems] = useState([]);
  const [state1, setState1] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    getCart();
    // fetchItemsHandler();
    getItems();
  }, []);

  const router = useRouter();
  // function logout() {
  //   localStorage.removeItem("token");
  //   router.push("/login");
  // }

  async function getCart() {
    fetch("http://localhost:8080/api/v1/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((product) => {
        setState1(product);
        console.log(state1);
        localStorage.setItem("myCart", JSON.stringify(state1));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function getCart2() {

    fetch("http://localhost:8080/api/v1/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((product) => {
        setState1(product);
        console.log(state1);
        localStorage.setItem("myCart", JSON.stringify(state1));
      })
      .catch((err) => {
        console.log(err);
      });
    router.push("/cart2");
  }

  // function logout() {
  //   localStorage.removeItem("token");
  //   // localStorage.setItem("token", null);
  //   router.push("/login");
  // }

  function getItems() {

    fetch("http://localhost:8080/api/v1/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((product) => {
        setItems(product);
        localStorage.setItem("items", JSON.stringify(product));
        console.log(product);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function fetchItemsHandler() {
  //   const items = JSON.parse(localStorage.getItem("items") || "[]");
  //   console.log(items);
  //   setItems(items);
  // }

  async function addToCart(item) {

    fetch(`http://localhost:8080/api/v1/cart/add/${item.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.text())
      .then((item) => {
        console.log(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function reload() {
    setTimeout(function () {
      location.reload();
    }, 0);
  }

  return (
    <Layout title="marketplace">
      <div className="w-screen px-10">
        <div>
          <h1 className="p-10 header-text text-center m-auto">
            {" "}
            🛍 Marketplace
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <input
            className="border-2 border-gray-300 mb-20 w-1/3"
            type="text"
            placeholder="🔍 Search for..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>

        <div className="grid grid-cols-1 gap-y-20 gap-x-5 md:grid-cols-3 lg:grid-cols-4 space-y-{9}">
          {items
            .filter((item) => {
              if (searchTerm == "") {
                return item;
              } else if (
                item.type.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              } else if (
                item.brand.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              } else if (
                item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              } else if (
                item.location.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => (
              <div
                className="shadow-lg group container rounded-md bg-white max-w-sm flex justify-center items-center content-di"
                key={item.id}
              >
                <div className="w-full p-5">
                  <img
                    src={item.url}
                    className=" object-contain rounded-full -mt-5 md:-mt-20 ml-5 md:ml-4 h-40 w-40 shadow-xl border-[3px] border-white bg-white"
                  ></img>
                  <p className="p-2"></p>
                  <div className="w-full group-hover:opacity-5 p-4">
                    <p className="product-title">{item.itemName}</p>
                    <p className="product-brand">{item.brand}</p>
                    <p className="p-2"></p>
                    <p className="mb-text-gray-700 font-base ">
                      {" "}
                      📍 {item.location}
                    </p>
                    <p className="text-gray-700 font-light">{item.type}</p>
                    <p className="mb-3"> 🗓 Expires on: {item.expiry_date}</p>
                    <p className="p-2"></p>

                    <p className="text-2xl"> ${item.price}</p>
                    <div className=" price-wrapper">
                      <div className=" price-slash"></div>
                      <p className="price">${item.originalprice}</p>
                    </div>
                    {/* <p>Quantity: {item.quantity}</p> */}

                    {/* <button
                        className="button w-full"
                        type="button"
                        onClick={() => addToCart(item) && reload()}
                      >
                        <div> Add to Cart</div>
                      </button> */}
                  </div>
                </div>
                <div className="absolute opacity-0 fd-sh group-hover:opacity-100 p-6 pt-20">
                  {item.carbon == 1 ? (
                    <div>
                      <p className="text-bold font-bold text-black tracking-wider leading-relaxed font-sans break-words">
                        🌎 This item has {item.carbon} carbon saving
                      </p>
                      <p class="text-bold font-bold text-black tracking-wider leading-relaxed font-sans break-words">
                        🤑 You will save ${(item.originalprice - item.price).toFixed(2)}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-bold font-bold text-black tracking-wider leading-relaxed font-sans break-words">
                        🌎 This item has {item.carbon} carbon savings
                      </p>
                      <p class="text-bold font-bold text-black tracking-wider leading-relaxed font-sans break-words">
                        🤑 You will save ${(item.originalprice - item.price).toFixed(2)}
                      </p>
                    </div>
                  )}
                  <div class="pt-8 text-center">
                    <button
                      className="button"
                      onClick={() => addToCart(item) && reload()}
                    >
                      🛒 Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
