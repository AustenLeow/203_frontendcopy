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
          <BiArrowBack className="text-2xl cursor-pointer" />{" "}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 rounded shadow-2xl gap-4 p-10">
          <div className="place-self-center">
            <a>
              <img
                src={product.image}
                alt={product.name}
                className="rounded shadow object-cover place-content-center"
              />
            </a>
          </div>
          <div className="text-left flex flex-col justify-between shadow-2xl h-fit p-10 my-auto col-span-2">
            <div>
              <div className="product-title">{product.name}</div>
              <div>{product.category}</div>
              <div>{product.description}</div>
              <div>{product.brand}</div>
            </div>
            <div className="flex justify-start">
              <div className="pr-2 pb-2">Status: </div>
              <div>
                {product.countInStock > 0 ? "    In stock" : "    Unavailable"}
              </div>
            </div>
            <div className="flex place-items-end justify-between">
              {/* <button
                className="product-button flex items-end hover:items-center justify-between w-full"
                type="button"
                // onClick={() => addToCartHandler(product)}
              >
                <div> Add to cart</div>
                <div>
                  {" "}
                  <p className="text-start">${product.price}</p>{" "}
                </div>
              </button> */}
              <a
                href="#_"
                class="relative inline-flex items-center justify-between p-4 px-5 py-3 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-green-500"
              >
                <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-green-600 via-white-400 to-green-900"></span>
                <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-green-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span class="relative text-white">Add to cart</span>
              </a>
              <div className="text-4xl font-bold px-4">
                {" "}
                <p className="text-start">${product.price}</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
