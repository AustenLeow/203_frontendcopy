import React from 'react';
import Layout from '../components/Layout';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';

export default function marketplace() {
  return (
    <Layout title="Marketplace">
      <div className="p-10">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            // addToCartHandler={addToCartHandler}
          ></ProductItem>
        ))}
      </div>
      </div>
    </Layout>
  );
}
