import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow object-cover h-64 w-full"
          />
        </a>
      </Link>
      <div className="flex flex-col items-start justify-start p-3">
        <div className="">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="product-title">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2 text-start">{product.brand}</p>
        <p className="text-xs">{product.category}</p>
        <p className="text-start">Quantity: {product.countInStock}</p>
        <p className="mb-2 text-start">Expires on: {product.expiry}</p>
        </div>
        <button
          className="product-button flex items-start justify-between w-full"
          type="button"
          // onClick={() => addToCartHandler(product)}
        >
          <div> Add to cart</div>
          <div> <p className="text-start">${product.price}</p> </div>
        </button>
      </div>
    </div>
  );
}