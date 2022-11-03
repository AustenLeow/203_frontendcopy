import { getClientBuildManifest } from "next/dist/client/route-loader";
import { useState, useEffect, React } from "react";

export default function UserProfile() {
    const [orders, setOrders] = useState([]);
    const [items, setItems] = useState([]);
    const [state, setState] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0.0);
    const [totalCarbonSavings, setTotalCarbonSavings] = useState(0.0);

    useEffect(() => {
        getOrders();
        getItems();
        getCart();
        fetchItemsHandler();
        fetchCartItemsHandler();
        fetchOrderedItemsHandler();
        getTotalCarbonSavings();
    }, []);

    function getOrders() {
        fetch("http://localhost:8080/api/v1/order", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((product) => {
                setOrders(product);
                console.log(state);
                localStorage.setItem("orders", JSON.stringify(state));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function getCart() {
        fetch("http://localhost:8080/api/v1/cart", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((product) => {
                setCart(product);
                console.log(state);
                localStorage.setItem("myCart", JSON.stringify(state));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function getItems() {
        fetch("http://localhost:8080/api/v1/items", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((product) => {
                setItems(product);
                localStorage.setItem("items", JSON.stringify(product));
                console.log(product);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function fetchItemsHandler() {
        const items = JSON.parse(localStorage.getItem("items") || "[]");
        console.log(items);
        setItems(items);
    }

    function fetchCartItemsHandler() {
        const cart = JSON.parse(localStorage.getItem("myCart") || "[]");
        console.log(cart);
        setCart(cart);
    }

    function fetchOrderedItemsHandler() {
        const orders = JSON.parse(localStorage.getItem("orders") || "[]");
        console.log(orders);
        setOrders(orders);
    }

    // function getTotalCarbonSavings() {
    //     fetch("http://localhost:8080/api/v1/order", {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + localStorage.getItem("token"),
    //       },
    //     })
    //       .then((response) => response.json())
    //       .then((product) => {
    //         // setCart(product);
    //         setOrders(product);
    //         let x = 0;
    //         console.log(product);
    //         localStorage.setItem("orders", JSON.stringify(product));
    //         product.cartItems.map(
    //           (item) => (x += item.carbontotal)
    //           // console.log(total)
    //         );
    //         //  console.log(x);
    //         setTotalCarbonSavings(x);
    //         return total;
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }

    function getCarbonSavings() {
        let x = 0;
        {
            orders.map((order) => (
                <div>
                    {order.cartItems.map((item) => (
                        x += item.carbontotal
                    ))}
                </div>
            ))
        }
        return x;
    }

    function getTotalCarbonSavings() {
        let x = 0;
        {
            orders.map((order) => (
                <div>
                    {order.cartItems.map((item) => (
                        x += item.carbontotal
                    ))}
                </div>
            ))
        }
        return x;
    }

    return (
        <div>
            <table className="table-auto min-w-full">
                <thead className="uppercase">
                    <tr>
                        <th className="py-3 px-6">Order ID</th>
                        <th className="py-3 px-6">Item(s)</th>
                        <th className="py-3 px-6">Carbon savings</th>
                        <th className="py-3 px-6">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="border-b-4">
                            <td className="p-5 text-center">{order.id}</td>
                            {order.cartItems.map((item) => (
                                <tr className="border-b">
                                    <td className="p-5 text-center">{item.quantity}x</td>
                                    <td className="p-5 text-center">{item.item.itemName}</td>
                                </tr>
                            ))}
                            <td className="p-5 text-center">{order.carbonTotal}</td>
                            <td className="p-5 text-center">{order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}