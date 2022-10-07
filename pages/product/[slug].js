import { useRouter } from "next/router";
import React, { useContext } from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import Link from 'next/Link';
import Image from 'next/image';
import { Store } from '../../utils/Store';
// import { BiArrowBack } from "react-icons/bi";

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  const backToProductsHandler = () => {
    router.push('/marketplace');
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.quantity < quantity) {
      alert('Product is out of stock.');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  }

  async function addToCart() {
    const res = await fetch('http://localhost:8080/api/v1/cart/add/${product.id}', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
      // body: JSON.stringify()
    })
    return await res.json();
  }

  return (
    <Layout title={product.item_name}>
      <div className="py-2 px-10">
        <button className="primary-button w-1/10" onClick={backToProductsHandler}>
          <Link href="/marketplace">
            Back to products
          </Link>
        </button>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2 px-10">
          <Image
            src={product.image}
            alt={product.item_name}
            width={150}
            height={150}
            layout="responsive">
          </Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.item_name}</h1>
            </li>
            <li>type: {product.type}</li>
            <li>Expires on: {product.expiry_date}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.quantity > 0 ? 'In stock' : 'Unavailable'}</div>
            </div>
            <button className="primary-button w-full" onClick={addToCartHandler && addToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
