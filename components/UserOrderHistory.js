import { getClientBuildManifest } from "next/dist/client/route-loader";
import { useState, useEffect, React } from "react";
import { CheckIcon } from "@heroicons/react/outline/esm";
import { useRouter } from "next/router";
import PendingCollectionModal from "../components/PendingCollectionModal";

export default function UserProfile() {
    const [orders, setOrders] = useState([]);
    const [showPendingCollectionModal, setShowPendingCollectionModal] = useState(false);
    const router = useRouter();

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

    function handleOnClose() {
        setShowPendingCollectionModal(false);
        router.push("/profile");
    }

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
                        {/* <th className="py-3 px-6">totalCarbon</th> */}
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
                            <td className="p-5 text-center">
                                {order.collected == 1 ? (
                                    <button>
                                        <CheckIcon className="h-5 w-5"></CheckIcon>
                                    </button>
                                ) : (
                                    order.donated == 0 ? (
                                        <div>
                                            <button className="button" onClick={() => setShowPendingCollectionModal(true)}>
                                                Pending
                                            </button>
                                            <PendingCollectionModal onClose={handleOnClose} visible={showPendingCollectionModal} />
                                        </div>
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
                            {/* <td className="p-5 text-center">{getCarbonSavings()}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}