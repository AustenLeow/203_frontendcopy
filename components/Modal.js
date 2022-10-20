import React from "react";
import { useRouter } from "next/router";

export default function MyModal({visible, onClose}) {
    if(!visible){
        return null;
    }
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="absolute bg-white p-8 rounded-xl w-80">
        <h1 className="font-bold text-center text-xl p-2">
         Donated to 
        </h1 >
        <h1 className="font-bold text-center text-xl p-2 pb-6" >Zero Waste Singapore</h1>
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
          <button onClick={onClose} className="button">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}