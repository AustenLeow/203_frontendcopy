import Link from "next/link";
import React, { useContext } from "react";

export default function ProductItem({ product, addToCartHandler }) {
  // const PRODUCT_ITEM_API = "http://localhost:8080/api/products";
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow object-cover h-3/5 w-full"
          />
        </a>
      </Link>
      <div className="flex flex-col justify-between p-5 h-2/5">
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
          <p className="text-start">Quantity: {product.countInStock}</p>
          <p className="mb-2 text-start">Expires on: {product.expiry}</p>

          <button
            className="product-button flex items-end hover:items-center justify-between w-full"
            type="button"
            onClick={addToCartHandler}
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