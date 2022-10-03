import React from 'react';
import Layout from '../components/Layout';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';
import {getSession, useSession, signOut} from 'next-auth/react';

export default function marketplace() {

  const {data:session} = useSession();

  function handleSignOut(){
    signOut();
  }

  return (
    <Layout title="marketplace">
      <div className="p-20">
        <div onClick={handleSignOut}>Sign out</div>
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

export async function getServerSideProps({req}){
  const session = await getSession({req})
  if(!session){
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
  return {
    props: {
      session
    }
  }
}
