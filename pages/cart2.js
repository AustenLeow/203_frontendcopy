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
                <table>
                <tr>
                    <th>item_id</th>
                    <th>item name</th>
                    <th>price</th>
                    <th>image url</th>
                    <th>quantity</th>
                    <th>subtotal</th>
                </tr>
                
                  {cart.map(cartitem => 
                    <tr>
                     <td>{cartitem.item.id}</td>,
                      <td>{cartitem.item.itemName}</td>,
                      <td>{cartitem.item.price}</td>,
                     <td><img src={cartitem.item.url}></img></td>,
                     <td>{cartitem.quantity}</td>,
                     <td>{cartitem.subtotal}</td>
                    </tr>
                  )}

                  </table>
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