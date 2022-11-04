import { getClientBuildManifest } from "next/dist/client/route-loader";
import { useState, useEffect, React } from "react";
import { CheckIcon } from "@heroicons/react/outline/esm";

export default function UserProfile() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders();
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

    return (
        <div>
            <table className="table-auto min-w-full">
                <thead className="uppercase">
                    <tr>
                        <th className="py-3 px-6">Order ID</th>
                        <th className="py-3 px-6">Item(s)</th>
                        <th className="py-3 px-6">Carbon savings</th>
                        <th className="py-3 px-6">Subtotal</th>
                        <th className="py-3 px-6">Collected</th>
                        <th className="py-3 px-6">Donated</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr className="border-b-4">
                            <td className="p-5 text-center">{order.id}</td>
                            {order.cartItems.map((item) => (
                                <tr className="border-b">
                                    <td className="p-5 text-center">{item.quantity}x</td>
                                    <td className="p-5 text-center">{item.item.itemName}</td>
                                </tr>
                            ))}
                            <td className="p-5 text-center">{order.carbonTotal}</td>
                            <td className="p-5 text-center">{order.total}</td>
                            <td className="p-5 text-center">
                                {order.collected == 1 ? (
                                    <button>
                                        <CheckIcon className="h-5 w-5"></CheckIcon>
                                    </button>
                                ) : (
                                    order.donated == 0 ? (
                                        "pending collection"
                                    ) : ("-")
                                )}
                            </td>
                            <td className="p-5 text-center">
                                {order.donated == 1 ? (
                                    <button>
                                        <CheckIcon className="h-5 w-5"></CheckIcon>
                                    </button>
                                ) : ("-")}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}