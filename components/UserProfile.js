import { useState, useEffect, React } from "react";
import { useRouter } from "next/router";

export default function UserProfile() {
  const router = useRouter();
  const [auth, setAuth] = useState({ loggedIn: false });
  const [orders, setOrders] = useState([]);
  const [carbonCount, setCarbonCount] = useState(0);
  const [moneySaved, setMoneySaved] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    // if (localStorage.getItem("token")) {
    //   setAuth(true);
    // } else {
    //   setAuth(false);
    // }
    getUser();
    // fetchUserHandler();
    // getOrders();
    // getCarbonSavings(user.id);
    // getTotalAmountSaved(user.id);
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

  function getTotalAmountSaved(userid) {
    fetch(`http://localhost:8080/api/v1/users/${userid}/moneysaved`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => response.json())
    .then((amount) => {
      setMoneySaved(amount);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function getCarbonSavings(userid) {
    fetch(`http://localhost:8080/api/v1/users/${userid}/carbonsaved`, {
      crossorigin: true,  
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((carbon) => {
        setCarbonCount(carbon);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
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
        console.log(user);
        localStorage.setItem("myUser", JSON.stringify(user));
        const user1 = JSON.parse(localStorage.getItem("myUser") || "{}");
        console.log(user1);
        setUser(user1);
        getCarbonSavings(user.id);
        getTotalAmountSaved(user.id);
        // setUser(user);
        // localStorage.setItem("myUser", JSON.stringify(user));
        // console.log(user);
        // setUser({id:user.id, username:user.username, email:user.email, password:user.password, carbonsaved:user.carbonsaved, moneysaved:user.moneysaved, answer:user.answer});
        // console.log(user);
        // console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function fetchUserHandler() {
  //   const user1 = JSON.parse(localStorage.getItem("myUser") || "{}");
  //   setUser(user1);
  //   // console.log(user1);
  //   // console.log(user);
  // }

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
              {/* ${() => getTotalAmountSaved(user.id)}{" "} */}
              ${moneySaved}{" "}
            </span>{" "}
            dollars and{" "}
            <span className="text-lime-700 text-md font-bold">
              {/* {() => getCarbonSavings(user.id)}{" "} */}
              {carbonCount}
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
