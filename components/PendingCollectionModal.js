import React from "react";
import { useRouter } from "next/router";

export default function PendingCollectionModal({ visible, onClose }) {
    if (!visible) {
        return null;
    }

    function collected(order) {

        const res = fetch(`https://api.greenfoodforyou.com:8080/api/v1/order/${order.id}/collected`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
      }

    function pendingCollectionModal() {
        collected(order);
        onClose();
    }


    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="absolute bg-white p-8 rounded-xl w-80">
                <h1 className="font-bold text-center text-xl p-2">Would you like to confirm collection of:</h1>
                <div>
                    <div>
                        Item ID:
                    </div>
                    <div>
                        Item(s):</div>
                </div>
                <div className="text-center p-4">
                    <button onClick={pendingCollectionModal} className="button">
                        Confirm
                    </button>
                    <div className="pt-4">
                        <a className="my-4 text-[#687259] hover:underline no-underline" href="/profile">
                            No, let me go back
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
