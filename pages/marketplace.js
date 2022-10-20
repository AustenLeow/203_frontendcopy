import { useRouter } from "next/router";
import React from 'react';
import Layout from '../components/Layout';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';
import { useState, useEffect, useCallback } from 'react';
import { ArrowCircleDownIcon } from "@heroicons/react/outline/esm";
import { Menu } from '@headlessui/react';

export default function marketplace() {
  const [items, setItems] = useState([]);
  const [state1, setState1] = useState([]);
  const [type, setType] = useState('');

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

  function getItemsByType() {
    // e.preventDefault();
    let pathOriginal = "http://localhost:8080/api/v1/items/type/${product.type}`";
    let pathWithType = pathOriginal + type;

    fetch(`http://localhost:8080/api/v1/items/${product.type}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((product) => {
        setType(product);
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
      <div className="px-5">
        {/* <button className="primary-button" onClick={logout}>Log out</button> */}
        {/* <div style={{ textAlign: "right" }}>
          <button onClick={getCart2} className="hidden md:flex text-[#4E632E]">
            cart
          </button>
          <button onClick={logout} className="hidden md:flex text-[#4E632E]">
            log out
          </button>
        </div> */}
        <div className="p-10">
          <h1 className="py-3 header-text text-center m-auto">Marketplace</h1>
        </div>
        <h1 className="py-3 header-text">Marketplace</h1>


        <div>
          <div className='flex w-50 p-2 text-left items-center'>
            Filter by: &nbsp;
          </div>
        </div>
        <Menu>
          <Menu.Button>
            <div>
              <div className='flex bg-white w-50 p-2 text-left items-center'>
                Type &nbsp;
                <ArrowCircleDownIcon className="h-3 w-3"></ArrowCircleDownIcon>
              </div>
            </div>
            <Menu.Items>
              <button className='flex w-50 p-2 text-left items-center' onClick={() => {setType("vegetable"); getItemsByType}}>
                Vegetables
              </button>
              <button className='flex w-50 p-2 text-left items-center' onClick={() => {setType("fruit"); getItemsByType}}>
                Fruits
              </button>
              <button className='flex w-50 p-2 text-left items-center' onClick={() => {setType("meat"); getItemsByType}}>
                Meat
              </button>
              <button className='flex w-50 p-2 text-left items-center' onClick={() => {setType("canned food"); getItemsByType}}>
                Canned food
              </button>
              <button className='flex w-50 p-2 text-left items-center' onClick={() => {setType("drink"); getItemsByType}}>
                Drinks
              </button>
            </Menu.Items>
          </Menu.Button>&nbsp;&nbsp;&nbsp;&nbsp;
        </Menu>

        <Menu>
          <Menu.Button>
            <div>
              <div className='flex bg-white w-50 p-2 text-left items-center'>
                Location &nbsp;
                <ArrowCircleDownIcon className="h-3 w-3"></ArrowCircleDownIcon>
              </div>
            </div>
            <Menu.Items>
              <div className='flex w-50 p-2 text-left items-center'>
                North
              </div>
              <div className='flex w-50 p-2 text-left items-center'>
                South
              </div>
              <div className='flex w-50 p-2 text-left items-center'>
                East
              </div>
              <div className='flex w-50 p-2 text-left items-center'>
                West
              </div>
              <div className='flex w-50 p-2 text-left items-center'>
                Central
              </div>
            </Menu.Items>
          </Menu.Button>
        </Menu>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <div className="card mt-20" key={item.id}>
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
                    Original Price: ${item.originalprice}
                  </p>
                </div>
                {/* <p>Quantity: {item.quantity}</p> */}
                <p className="mb-3">Expires on: {item.expiry_date}</p>
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
