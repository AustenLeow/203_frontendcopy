import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import { BiArrowBack } from "react-icons/bi";

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug); // getting product from slug

  // if product does not exist
  if (!product) {
    return <div>Produt Not Found</div>;
  }

  return (
    <Layout title={product.name}>
      <div className=" mx-auto py-16 md:py-32 w-3/4">
        <div className="p-4">
          {" "}
          <BiArrowBack />{" "}
        </div>
        <div className="w-full h-fit m-auto grid grid-cols-1 lg:grid-cols-2 rounded shadow-2xl p-10">
          <div className="relative p-20 hover:p-15">
            <Image
              className="rounded shadow-xl hover:scale-110 duration-300"
              src={product.image}
              alt={product.name}
              width={700}
              height={640}
            ></Image>
          </div>
          <div className="text-left flex flex-col justify-between shadow-2xl h-fit p-10 my-auto">
            <div>
              <div className="product-title">{product.name}</div>
              <div>{product.category}</div>
              <div>{product.description}</div>
              <div>{product.brand}</div>
            </div>
            <div className=" flex justify-start">
              <div className="pr-2 pb-2">Status: </div>
              <div>{product.countInStock > 0 ? '    In stock' : '    Unavailable'}</div>
            </div>
            <div>
                <button
                  className="product-button flex items-end hover:items-center justify-between w-full"
                  type="button"
                  // onClick={() => addToCartHandler(product)}
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
      </div>
    </Layout>
  );
}
