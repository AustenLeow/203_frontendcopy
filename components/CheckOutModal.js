import React from "react";

export default function CheckOutModal({ visible, onClose }) {
  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="absolute bg-white p-8 rounded-xl w-80">
        <h1 className="font-bold text-center text-xl p-2">
          Your order has been confirmed!
        </h1>
        <p className="text-center text-base">
          {" "}
          Thank you for shopping with us{" "}
        </p>
        <p className="text-center text-base p-4">
          {" "}
          * Please self collect your order within 2 days! {" "}
        </p>
        <div className="flex flex-col items-center justify-center">
          <img
            alt=" "
            src="/checkout.png"
            height={300}
            width={300}
            className="ml-3 p-4"
          />
        </div>
        <div className="text-center p-4">
          <button onClick={onClose} className="button">
            OK
          </button>
          <div className="pt-4">
            {/* <a className="my-4 text-[#687259] hover:underline no-underline" href="/cart2">
                  No, let me go back </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
