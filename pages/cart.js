import React, { useContext } from 'react'
import Layout from "../components/Layout";
import { Store } from '../utils/Store';
import Link from 'next/Link';
import Image from 'next/image';
import { XCircleIcon } from '@heroicons/react/outline/esm';
import dynamic from 'next/dynamic';

function CartScreen() {
    // const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    const removeItemHandler = (item) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    };

    const updateCartHandler = (item, qty) => {
        const quantity = Number(qty);
        dispatch({type: 'CART_ADD_ITEM', payload:{...item, quantity}});
    };

    return (
        <Layout title='cart'>
            {cartItems.length === 0 ? (
                <div className='p-5'>
                    Cart is empty. &nbsp;
                    <a className="my-4 text-[#687259]" href="/marketplace" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Go shopping.
                    </a>
                </div>
            ) : (
                <div className='grid md:grid-cols-4 md:gap-5'>
                    <div className='overflow-x-auto md:col-span-3'>
                        <table className='min-w-full'>
                            <thead className='border-b'>
                                <tr>
                                    <th className='px-5 text-left'>Item</th>
                                    <th className='px-5 text-lright'>Quantity</th>
                                    <th className='px-5 text-rigth'>Price</th>
                                    <th className='px-5'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.slug} className='border-b'>
                                        <td>
                                            <Link href={`/product/${item.slug}`}>
                                                <a className='flex items-center'>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        width={50}
                                                        height={50}
                                                    ></Image>
                                                    &nbsp;
                                                    {item.name}
                                                </a>
                                            </Link>
                                        </td>
                                        <td className='p-5 text-right'>
                                            <select
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    updateCartHandler(item, e.target.value)
                                                }
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                        <td className='p-5 text-right'>${item.price}</td>
                                        <td className='p-5 text-center'>
                                            <button onClick={() => removeItemHandler(item)}>
                                                <XCircleIcon className='h-5 w-5'></XCircleIcon>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='card p-5'>
                        <ul>
                            <li>
                                <div className='pb-3 text-xl'>
                                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                                </div>
                            </li>
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

export default dynamic(()=> Promise.resolve(CartScreen), {ssr:false});