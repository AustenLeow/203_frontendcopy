import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";
import data from "../utils/data";
import ProductItem from "../components/ProductItem";
import { useState, useEffect, useCallback } from "react";

=======
import data from "../utils/data";
import ProductItem from "../components/ProductItem";
import { useState, useEffect, useCallback } from "react";
>>>>>>> 57b4bb4fcaa7b34439a18da88d38cc71bc119c37

export default function marketplace() {
  const [items, setItems] = useState([]);
  const [state1, setState1] = useState([]);

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

  function logout() {
    localStorage.removeItem("token");
    // localStorage.setItem("token", null);
    router.push("/login");
  }

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

  function fetchItemsHandler() {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    console.log(items);
    setItems(items);
  }

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

  return (
    <Layout title="marketplace">
      <div className="w-screen">
        <div className="h-40">
          <h1 className="py-3 header-text text-center m-auto">Marketplace</h1>
        </div>

        <div className="p-6 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <div className="card" key={item.id}>
              <div>
                <div className="max-w-4xl mx-auto">
                  <img
                    src={item.url}
                    className=" object-contain rounded-full -mt-5 md:-mt-20 ml-5 md:ml-4 h-40 w-40 shadow-xl border-[3px] border-white bg-white"
                  ></img>
                </div>

                <div className="py-5">
                  <p className="product-title">{item.itemName}</p>
                  <p className="product-brand">{item.brand}</p>
                </div>

                <p className="price">Discounted Price: ${item.price}</p>
                <div className="price-wrapper">
                  <div className="price-slash"></div>
                  <p className="price text-2xl">
                   ${item.originalprice}
                  </p>
                </div>
                {/* <p>Quantity: {item.quantity}</p> */}
                <p className="mb-3">Expires on: {item.expiry_date}</p>
                <button
                  className="button w-full"
                  type="button"
                  onClick={() => addToCart(item)}
                >
                  <div> Add to Cart</div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
