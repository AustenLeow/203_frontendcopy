import { useState, useEffect, useCallback } from 'react';
import Layout from "../components/Layout";

export default function cart2() {

    useEffect(() => {
        fetchCartItemsHandler();
    }, []);
    
    function fetchCartItemsHandler() {
        
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
              );
    }
        
}


/////////// things we have tried to get cart ...

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