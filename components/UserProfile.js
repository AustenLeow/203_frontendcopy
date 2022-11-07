import { useState, useEffect, React } from "react";
import { useRouter } from "next/router";
import { IoConstructOutline } from "react-icons/io5";
// import { forwardRefWithAs } from "@headlessui/react/dist/utils/render";

export default function UserProfile() {
  const router = useRouter();
  const [auth, setAuth] = useState({ loggedIn: false });
  const [orders, setOrders] = useState([]);
  const [carbonCount, setCarbonCount] = useState(0);
  const [moneySaved, setMoneySaved] = useState(0);
  const [user, setUser] = useState({});
  const [rank, setRank] = useState(0);
  const [ranklist, setRanklist] = useState([]);
  const [distFromLeaderboard ,setDistFromLeaderboard] = useState(0);

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
    fetch(
      "https://9gbljis7zg.execute-api.ap-southeast-1.amazonaws.com/green/api/v1/order",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
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
    fetch(
      `https://9gbljis7zg.execute-api.ap-southeast-1.amazonaws.com/green/api/v1/users/${userid}/moneysaved`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // 'Access-Control-Allow-Origin': '*',
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((response) => response.json())
      .then((amount) => {
        setMoneySaved(amount);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getCarbonSavings(userid) {
    fetch(
      `https://9gbljis7zg.execute-api.ap-southeast-1.amazonaws.com/green/api/v1/users/${userid}/carbonsaved`,
      {
        crossorigin: true,
        method: "GET",
        headers: {
          // 'Access-Control-Allow-Origin': '*',
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
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
    const response = await fetch(
      "https://9gbljis7zg.execute-api.ap-southeast-1.amazonaws.com/green/api/auth/currentuser",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        localStorage.setItem("myUser", JSON.stringify(user));
        const user1 = JSON.parse(localStorage.getItem("myUser") || "{}");
        console.log(user1);
        setUser(user1);
        getCarbonSavings(user.id);
        getTotalAmountSaved(user.id);
        getRank(user.id, user.carbonsaved);
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


  function getRank(userid, carbonsaved) {
    fetch(
      "https://9gbljis7zg.execute-api.ap-southeast-1.amazonaws.com/green/api/v1/users/top10",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((users) => {
        setRanklist(users);
        console.log("XXX");
        console.log(users);
        

        for(const user of users) {
        if(userid == user.id){
          console.log(users.indexOf(user));
          setRank(users.indexOf(user));
          console.log(rank);
          break;
        }
        else{
          setRank(0);
          let tenthpos = users[9].carbonsaved;
          setDistFromLeaderboard(tenthpos - carbonsaved);
          console.log(carbonsaved);
          console.log("curr" + carbonsaved);
          console.log("tenth" + tenthpos);
        }
        }
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
          <div className=" flex items-center justify-center">
          <img
            alt="/"
            src="/profile.png"
            height={100}
            width={200}
            className="ml-3 p-2"
          />
          </div>

          {moneySaved == 0 ? (
            <div>
              <p className="px-16 text-center text-md text-gray-800">
                Start saving on money and your carbon footprint!
              </p>
              <p className="px-16 text-center text-md text-gray-800">
              You are {distFromLeaderboard}cm<span id="super">3</span> away from the leaderboard.
              </p>
              <p className="px-16 text-center text-md">
                <a
                  className="px-16 text-center text-md text-[#687259] hover:underline no-underline"
                  href="/marketplace"
                >
                  Start shopping 🛒
                </a>
              </p>
            </div>
          ) : (
            <p className="px-16 text-center text-md text-gray-800">
              {{rank} == 0 ? 
              (<div><p className="px-16 text-center text-md text-gray-800">
              Thank you for your support!
              You are {distFromLeaderboard}cm<span id="super">3</span> away from the leaderboard.
            </p></div>)
            :
            (
                <div><p className="px-16 text-center text-md text-gray-800">
               Congratulations, you are number {rank + 1} on the leaderboard!
              </p></div>
              )
            }
              You have saved a total of{" "}
              <span className="text-lime-700 text-md font-bold">
                {" "}
                {/* ${() => getTotalAmountSaved(user.id)}{" "} */}${moneySaved}{" "}
              </span>{" "}
              dollars and{" "}
              <span className="text-lime-700 text-md font-bold">
                {/* {() => getCarbonSavings(user.id)}{" "} */}
                {carbonCount}
              </span>{" "}
              cm<span id="super">3</span> of carbon!
            </p>
          )}

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
