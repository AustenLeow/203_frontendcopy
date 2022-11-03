import { useRouter } from "next/router";
import React, { useContext } from "react";
import data from "../utils/data";
import Link from 'next/Link';
import { Store } from '../utils/Store';

export default function ProductItem({ product }) {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('Product is out of stock.');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  }


  async function addToCart() {
    fetch(`http://52.221.210.169:8080/api/v1/cart/add/${product.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
    }).then(response => response.text())
    .then(product => {
      console.log(product);
      
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow object-cover h-1/2 w-full"
          />
        </a>
      </Link>
      <div className="flex flex-col justify-between p-3 h-2/5">
        <div className="flex flex-col justify-start">
          <Link href={`/product/${product.slug}`}>
            <a>
              <h2 className="product-title">{product.name}</h2>
            </a>
          </Link>
          <p className="text-start">{product.brand}</p>
          <p className="text-xs">{product.category}</p>
        </div>
        <div className="py-3"></div>

        <div className="flex flex-col justify-end items-start">
          <p className="mb-2 text-start">Expires on: {product.expiry}</p>

          <button
            className="product-button flex items-end hover:items-center justify-between w-full"
            type="button"
            onClick={addToCartHandler && addToCart}
          >
            <div> Add to cart</div>
            <div>
              {" "}
              <p className="text-start">${product.price}</p>{" "}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
  }