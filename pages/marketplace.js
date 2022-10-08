import { useRouter } from "next/router";
import React from 'react';
import Layout from '../components/Layout';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';
import { useState, useEffect, useCallback } from 'react';

export default function marketplace() {

  const router = useRouter();
  useEffect(() => {
    fetchItemsHandler();
}, []);

  function logout() {
    localStorage.removeItem("token")
    router.push("/login")
  }

  function fetchItemsHandler() {
        
    const items = JSON.parse((localStorage.getItem("items")|| "[]"));
    console.log(items);
  }

  return (
    <Layout title="marketplace">
      <div className="p-10">
      <p><button onClick={logout}>Log out</button></p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
          ></ProductItem>
        ))}
      </div>
      </div>
    </Layout>
  );
}
