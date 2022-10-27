import { useState, useEffect, React } from "react";

export default function UserProfile() {
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
  }, []);

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
  // function fetchUserHandler() {
  //     // const cart = JSON.parse(localStorage.getItem("myCart") || "[]");
  //     console.log(user);
  //     setUser(user);
  //   }

  // async function fetchContent() {
  //     const res = await fetch('http://localhost:8080/api/auth/currentuser', {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": "Bearer " + localStorage.getItem("token")
  //       }

  return (
    <div>
      <p> Hi {user.username} !</p>
      <p> Email: {user.email} </p>
      <p>
        {" "}
        You have saved {user.moneysaved} dollars and {user.carbonsaved} pounds
        of carbon!{" "}
      </p>
      <p> Your ID is {user.id}</p>

      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
        <div class="md:flex">
          <div class="w-full p-2 py-10">
            <div class="flex flex-col text-center mt-3 mb-4">
              <span class="text-2xl font-medium">Hi <strong>{user.username}</strong> !</span>
              <span class="text-md text-gray-400">{user.email}</span>
            </div>

            <p class="px-16 text-center text-md text-gray-800">
            You have saved ${user.moneysaved} dollars and <span class="text-blue-800 text-md font-bold">{user.carbonsaved} </span> pounds of carbon!
             </p>

            <div class="flex flex-col px-16 mt-3 text-center">
              <span class="bg-gray-100  rounded cursor-pointer hover:shadow hover:bg-gray-200">
                Change email
              </span>
              <p className="p-1"></p>
              <span class="bg-gray-100 rounded cursor-pointer hover:shadow hover:bg-gray-200">
                View password
              </span>
              <p className="p-1"></p>
              <span class="bg-gray-100  rounded cursor-pointer hover:shadow hover:bg-gray-200">
                Change password
              </span>
           
            
            </div>

            <div class="px-14 mt-5">
              <button class="h-12 bg-gray-200 w-full text-black text-md rounded hover:shadow hover:bg-gray-300 mb-2">
                Message
              </button>

              <button class="h-12 bg-blue-700 w-full text-white text-md rounded hover:shadow hover:bg-blue-800">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
