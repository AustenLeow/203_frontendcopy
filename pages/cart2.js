import { useState, useEffect, useCallback } from 'react';
import Layout from "../components/Layout";
import { Store } from '../utils/Store';
import Link from 'next/Link';
import Image from 'next/image';
import { XCircleIcon } from '@heroicons/react/outline/esm';
import dynamic from 'next/dynamic';

export default function cart2() {
    const [cart, setCart] = useState([]);
    const [state1, setState1] = useState({});
    useEffect(() => {
        fetchCartItemsHandler();
    }, []);
    
    function fetchCartItemsHandler() {
        
            // fetch('http://localhost:8080/api/v1/cart', {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         "Authorization": "Bearer " + localStorage.getItem("token")
            //     }
            // })
            // .then((res) => res.json())
            // .then((data) => {   
            //         // console.log(data);
            //         setState1(prevState => {
            //             // Object.assign would also work
            //             return {...prevState, ...data};
            //           });
                    
            //         // setState1(product);
            //         console.log(state1);
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     });
            const cart = JSON.parse((localStorage.getItem("myCart")|| "[]"));
            console.log(cart);

            return (
                <Layout>
                  <div >
                    <h1 >Cart</h1>
                    {cart && (
                      <p>{cart}</p>
                    )}
                  </div>
                </Layout>
              )
    }
        
}



                    // const items = data.map((itemdata) => {
                    //     return {
                    //         id: itemdata.item.id,
                    //         itemName: itemdata.item.itemName,
                    //         price: itemdata.item.price,
                    //         url: itemdata.item.url,
                    //         quantity: itemdata.quantity,
                    //         subtotal: itemdata.subtotal
                    //     };
                    // });


    // const fetchCartItemsHandler = useCallback(async () => {
                            
        // setError(null);
        // try {
        //     const res = await fetch('http://localhost:8080/api/v1/cart', {
        //             method: 'GET',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 "Authorization": "Bearer " + localStorage.getItem("token")
        //             }
        //         });
        //     if (!res.ok) {
        //         throw new Error('Something went wrong');
        //     }
        //     const data = await res.json();
        //     // const data = JSON.stringify(dataobj);
        //     // const itemlist = [];
        //     console.log(data);

            // for (const key in data) {
            //     itemlist.push({
            //         id: data[key].item.id,
            //         itemName: data[key].item.itemName,
            //         price: data[key].item.price,
            //         url: data[key].item.url,
            //         quantity: data[key].quantity,
            //         subtotal: data[key].subtotal
            //     });
        //     // }
        //     setCartItems(data);
        // } 
        // catch (error) {
        //     setError(error.message);
        // }
        // console.log(cartItems);