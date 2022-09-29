import React from 'react';
import Layout from '../components/Layout';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';

export default function marketplace() {
  return (
    <Layout title="marketplace">
      <div className="p-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
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
