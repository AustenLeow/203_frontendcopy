import { useState, useEffect, React } from "react";
import { useRouter } from "next/router";

export default function UserProfile() {
  const router = useRouter();
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

  return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
      <div class="md:flex">
        <div class="w-full p-2 py-10">
          <div class="flex flex-col text-center mt-3 mb-4">
            <span class="text-2xl font-medium">
              Hi{" "}
              <strong>
                <span class="text-lime-700 text-md font-bold">
                  {" "}
                  {user.username}{" "}
                </span>
              </strong>{" "}
              !
            </span>
            <span class="text-md text-gray-400">{user.email}</span>
          </div>

          <p class="px-16 text-center text-md text-gray-800">
            You have saved{" "}
            <span class="text-lime-700 text-md font-bold">
              {" "}
              ${user.moneysaved}{" "}
            </span>{" "}
            dollars and{" "}
            <span class="text-lime-700 text-md font-bold">
              {user.carbonsaved}{" "}
            </span>{" "}
            pounds of carbon!
          </p>

          <div class="flex flex-col px-16 mt-3 text-center">
            <span class="bg-gray-100  rounded cursor-pointer hover:shadow hover:bg-gray-200">
              Change email
            </span>
            <p className="p-1"></p>
            <span class="bg-gray-100  rounded cursor-pointer hover:shadow hover:bg-gray-200">
              Change password
            </span>
            <p className="p-1"></p>
          </div>

          <div class="px-14 mt-5 flex items-center justify-center">
            <button className="button" onClick={() => router.back()}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
