import React from 'react';
import Layout from '../components/Layout';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';

export default function marketplace() {
  return (
    <Layout title="Marketplace">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
          ></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
