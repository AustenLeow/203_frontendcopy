import { useState, useEffect, useCallback } from 'react';
import Layout from "../components/Layout";
import { Store } from '../utils/Store';
import Link from 'next/Link';
import Image from 'next/image';
import { XCircleIcon } from '@heroicons/react/outline/esm';
import dynamic from 'next/dynamic';

export default function cart2() {
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        fetchCartItemsHandler();
    }, []);
    
    // const fetchCartItemsHandler = useCallback(async () => {
    function fetchCartItemsHandler() {
        // e.preventDefault();
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



            fetch('http://localhost:8080/api/v1/cart', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            .then((res) => res.json())
            .then((data) => {   
                    console.log(data);
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
                    setCartItems(data);
                    console.log(cartItems);
                })
                .catch(err => {
                    console.log(err);
                });

            return (
                <Layout>
                  <div >
                    <h1 >Cart</h1>
                    {cartItems && (
                      <p>{cartItems}</p>
                    )}
                  </div>
                </Layout>
              )
    }
    // }, []);

        
}