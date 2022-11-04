import { useState, useEffect, React } from "react";
import { useRouter } from "next/router";

export default function UserProfile() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    roles: [],
    id: 0,
    moneysaved: 0,
    carbonsaved: 0,
    answer: "",
  });

  useEffect(() => {
    getUser();
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

  function getCarbonSavings() {
    let x = 0;
    {
      orders.map((order) => (
        <div key={order.id}>
          {order.cartItems.map((item) => (
            x += item.carbontotal
          ))}
        </div>
      ))
    }
    return x;
  }

  function getDiscountedExpenditure() {
    let x = 0;
    {
      orders.map((order) => (
        <div key={order.id}>
          {order.cartItems.map((item) => (
            x += (item.quantity * item.item.price)
          ))}
        </div>
      ))
    }
    return x;
  }

  function getOriginalExpenditure() {
    let x = 0;
    {
      orders.map((order) => (
        <div key={order.id}>
          {order.cartItems.map((item) => (
            x += (item.quantity * item.item.originalprice)
          ))}
        </div>
      ))
    }
    return x;
  }

  async function getUser() {
    const response = await fetch("http://localhost:8080/api/auth/currentuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
        console.log();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
      <div className="md:flex">
        <div className="w-full p-2 py-10">
          <div className="flex flex-col text-center mt-3 mb-4">
            <span className="text-2xl font-medium">
              Hi{" "}
              <strong>
                <span className="text-lime-700 text-md font-bold">
                  {" "}
                  {user.username}{" "}
                </span>
              </strong>{" "}
              !
            </span>
            <span className="text-md text-gray-400">{user.email}</span>
          </div>

          <p className="px-16 text-center text-md text-gray-800">
            You have saved a total of {" "}
            <span className="text-lime-700 text-md font-bold">
              {" "}
              ${(getOriginalExpenditure() - getDiscountedExpenditure()).toFixed(2)}{" "}
            </span>{" "}
            dollars and{" "}
            <span className="text-lime-700 text-md font-bold">
              {getCarbonSavings().toFixed(2)}{" "}
            </span>{" "}
            cm<sup>3</sup> of carbon!
          </p>

          {/* <div className="flex flex-col px-16 mt-3 text-center">
            <span className="bg-gray-100  rounded cursor-pointer hover:shadow hover:bg-gray-200">
              Change email
            </span>
            <p className="p-1"></p>
            <span className="bg-gray-100  rounded cursor-pointer hover:shadow hover:bg-gray-200">
              Change password
            </span>
            <p className="p-1"></p>
          </div> */}

          <div className="px-14 mt-5 flex items-center justify-center">
            <button className="button" onClick={() => router.back()}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
