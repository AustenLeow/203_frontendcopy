import React, { useState, useEffect, useCallback } from 'react';

export default function cart2() {

    // const items = [];
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetchCartItemsHandler();
    }, []);
    
    function fetchCartItemsHandler() {
        const cart = JSON.parse((localStorage.getItem("myCart")|| "[]"));
        console.log(cart);
        setCart(cart);
    }
    
    return (
        <React.Fragment>
              <div >
                <h1>Cart</h1>
                  {cart.map(cartitem => 
                     <p>{cartitem.item.id}</p>,
                      {/* <p>{cartitem.item.itemName}</p>,
                      <p>{cartitem.item.price}</p>,
                     <p>{cartitem.item.url}</p>,
                     <p>{cartitem.quantity}</p>,
                     <p>{cartitem.subtotal}</p> */}
                      
                  )}
              </div>
        </React.Fragment>
        );
}


/////////// things we have tried to get cart ...

    // const items = data.map((cart) => {
    //     return {
    //         id: cart.item.id,
    //         itemName: cart.item.itemName,
    //         price: cart.item.price,
    //         url: cart.item.url,
    //         quantity: cart.quantity,
    //         subtotal: cart.subtotal
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