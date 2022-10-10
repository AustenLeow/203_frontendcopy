import React, { useState, useEffect} from 'react';
import Layout from "../components/Layout";
// import Image from 'next/image';
import { XCircleIcon } from '@heroicons/react/outline/esm';

export default function cart2() {

    const total = 0;

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetchCartItemsHandler();
    }, []);
    
    function fetchCartItemsHandler() {
        const cart = JSON.parse((localStorage.getItem("myCart")|| "[]"));
        console.log(cart);
        setCart(cart);
    }

    const removeItemHandler = (product) => {
        fetch(`http://localhost:8080/api/v1/cart/delete/${product.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            }).then(response => response.text())
            .then(product => {
            console.log(product);
            fetchCartItemsHandler()
            })
            .catch(err => {
            console.log(err);
            })
    };
    
    return (
        <Layout title="cart">
                <h1 className='text-xl p-7'>Your Shopping Cart</h1>
                { cart.length == 0 ? (<div className='px-7'>
                    Cart is empty. <a className='text-[#687259]' href='/marketplace'>Go shopping</a>
                </div>) : 
                (
                <div className='grid md:grid-cols-4 md:gap-5 px-7'>
                <div className='overflow-x-auto md:col-span-3'>
                <table className='min-w-full'>
                <thead className='border-b'>
                <tr>
                    <th className='px-5 text-right'>item</th>
                    <th className='px-5 text-right'></th>
                    <th className='px-5 text-right'>price</th>
                    <th className='px-5 text-right'>quantity</th>
                    <th className='px-5 text-right'>subtotal</th>
                    <th className='px-5'>Action</th>
                </tr>
                </thead>
                <tbody>
                  {cart.map((cartitem) => 
                    <tr key={cartitem.item.id} className='border-b'>
                      <td className='p-5 text-right'>{cartitem.item.itemName}</td>
                      <td className='p-5 text-right'><img src={cartitem.item.url} alt={cartitem.item.itemName} className='flex items-center' width={100} height={100}></img></td>
                      <td className='p-5 text-right'>{cartitem.item.price}</td>
                     <td className='p-5 text-right'>{cartitem.quantity}</td>
                     <td className='p-5 text-right'>{cartitem.subtotal}</td>
                     <td className='p-5 text-center'>
                        <button onClick={() => removeItemHandler(cartitem.item)}>
                            <XCircleIcon className='h-5 w-5'></XCircleIcon>
                        </button>
                    </td>
                    </tr>
                  )}
                </tbody>
                  </table>
                  </div>
                  <div className='card p-5'>
                        <ul>
                            {/* <li>
                                <div className='pb-3 text-xl'>
                                    Subtotal ${cartitem.subtotal}
                                </div>
                            </li> */}
                            {/* check out */}
                            <li>
                                <button className='primary-button w-full'>Check Out</button>
                            </li>
                        </ul>
                    </div>
                  </div>
                )}
             
            
        </Layout>
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