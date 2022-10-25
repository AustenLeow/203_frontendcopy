import React from "react";
import { useRouter } from "next/router";

export default function MyModal({ visible, onClose }) {
  if (!visible) {
    return null;
  }

  function addOrder() {
    const res = fetch("http://localhost:8080/api/v1/order/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
  }

  function donateModal(){
    addOrder();
    onClose();
  }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="absolute bg-white p-8 rounded-xl w-80">
        <h1 className="font-bold text-center text-xl p-2">Your items will be donated to</h1>
        <div className="flex flex-col items-center justify-center">
          <img
            alt="charity"
            src="/zerowastesg.png"
            height={100}
            width={200}
            className="ml-3 p-4 scale-125"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            alt=" "
            src="/donate.png"
            height={300}
            width={300}
            className="ml-3 p-4"
          />
        </div>
        <div className="text-center p-4">
          
          <button onClick={donateModal} className="button">
            Donate
          </button>
          <div className="pt-4">
          <a className="my-4 text-[#687259] hover:underline no-underline" href="/cart2">
                  No, let me go back
                </a>
          </div>
        </div>
      </div>
    </div>
  );
}
