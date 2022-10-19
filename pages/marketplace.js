import { useRouter } from "next/router";
import React from 'react';
import Layout from '../components/Layout';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';
import { useState, useEffect, useCallback } from 'react';
import { ArrowDownIcon } from "@heroicons/react/outline/esm";
import { Menu } from '@headlessui/react';

export default function marketplace() {

  const [items, setItems] = useState([]);
  const [state1, setState1] = useState([]);
  const [type, setType] = useState([]);
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
      router.push("/cart2")
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
    let  pathOriginal = "http://localhost:8080/api/v1/items";
    let  pathWithType =  pathOriginal + "/" + type;

    fetch(pathWithType, {
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
        localStorage.setItem("items", JSON.stringify(state1));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function fetchItemsHandler() {
    const items = JSON.parse((localStorage.getItem("items") || "[]"));
    console.log(items);
    setItems(items);
  }

  async function addToCart (item) {
    fetch(`http://localhost:8080/api/v1/cart/add/${item.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
    }).then(response => response.text())
    .then(item => {
      console.log(item);
      
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <Layout title="marketplace">
      <div className="px-5">
        {/* <button className="primary-button" onClick={logout}>Log out</button> */}
        <div  style={{"textAlign":"right"}}>
          <button onClick={getCart2} className="hidden md:flex text-[#4E632E]">cart</button>
          <button onClick={logout} className="hidden md:flex text-[#4E632E]">log out</button>
        </div>
        <h1 className="py-3 header-text">Marketplace</h1>


            <div>
              <div className='flex w-50 p-2 text-left items-center'>
                Filter by: &nbsp;
                {/* // hydration error */}
              </div>
            </div>
          <Menu>
          <Menu.Button>
            <div>
            <div className='flex bg-white w-50 p-2 text-left items-center'>
                Type &nbsp;
                {/* // hydration error */}
                <ArrowDownIcon className="h-3 w-3"></ArrowDownIcon>
              </div>
            </div>
            <Menu.Items>
            <button className='flex w-50 p-2 text-left items-center' onClick={() => setType("Vegetables")}>
              Vegetables
            </button>
            <button className='flex w-50 p-2 text-left items-center' onClick={() => setType("Fruits")}>
              Fruits
            </button>
            <button className='flex w-50 p-2 text-left items-center' onClick={() => setType("Meat")}>
              Meat
            </button>
            <button className='flex w-50 p-2 text-left items-center' onClick={() => setType("Canned food")}>
              Canned food
            </button>
            <button className='flex w-50 p-2 text-left items-center' onClick={() => setType("Drinks")}>
              Drinks
            </button>
          </Menu.Items>
          </Menu.Button>&nbsp;&nbsp;&nbsp;&nbsp;

          <Menu.Button>
            <div>
            <div className='flex bg-white w-50 p-2 text-left items-center'>
                Location &nbsp;
                {/* // hydration error */}
                <ArrowDownIcon className="h-3 w-3"></ArrowDownIcon>
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
            <div className="card" key={item.id}>
              <div >
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
