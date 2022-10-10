import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";
import { useState, useEffect, useCallback } from "react";

export default function marketplace() {


  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
    fetchItemsHandler();
  }, []);

  const router = useRouter();
  function logout() {
    localStorage.removeItem("token");
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
        localStorage.setItem("items", JSON.stringify(product));
        console.log();
        setItems(product);
        
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
      <div className="px-5">
        <button className="primary-button" onClick={logout}>Log out</button>
        <h1 className="py-3 header-text">Marketplace</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <div className="card">
              <div key={item.id}>
                <p>
                  <img src={item.url} width={100} height={100}></img>
                </p>
                <div className="py-5">
                  <p className="font-bold text-xl">{item.itemName}</p>
                  <p className="font-light text-xs">{item.brand}</p>
                </div>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Expires on: {item.expiry_date}</p>
                <button
                  className="product-button w-full"
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
