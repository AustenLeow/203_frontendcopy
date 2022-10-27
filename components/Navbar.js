import { useEffect, useState } from "react";
import React, { useContext } from "react";
import { Store } from "../utils/Store";
import ReactDOM from "react-dom/client";
import { useRouter } from "next/router";

function NavLink({ to, children }) {
  return <a href={to} className={`mx-4`}>
    {children}
  </a>
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute left-0 h-screen w-screen bg-[#F5F5F5] transform ${open ? "-translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md h-20">
        {" "}
        {/*logo container*/}
        <a className="text-2xl font-semibold text-[#687259]" href="/">
          re_
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl  my-4 text-[#4E632E]"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          about
        </a>
        <a
          className="text-xl my-4 text-[#4E632E]"
          href="/marketplace"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          marketplace
        </a>
        <a
          className="text-xl my-4 text-[#4E632E]"
          href="/login"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          login
        </a>
        <a
          className="text-xl my-4 text-[#4E632E]"
          href="/sign up"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          sign up
        </a>
        <a
          className="text-xl my-4 text-[#4E632E]"
          href="/cart"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          cart
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { state } = useContext(Store);
  const { cart } = state;
  const [state1, setState1] = useState({});
  const [cartItemsCount, setCartItemsCount] = useState(0);

  // const router = useRouter();
  // // const isLoggedIn = () => {localStorage.getItem('token') != null}

  // useEffect(() => {
  //   // isLoggedIn;
  //   getCart(); 
  //   setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  // }, [cart.cartItems]);

  // async function getCart() {
  //   fetch("http://localhost:8080/api/v1/cart", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + localStorage.getItem("token"),
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((product) => {
  //       setState1(product);
  //       console.log(state1);
  //       localStorage.setItem("myCart", JSON.stringify(state1));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //     router.push("/cart2");
  // }
  // function logout() {
  //   localStorage.removeItem("token");
  //   // localStorage.setItem("token", null);
  //   router.push("/login");
  // }

  return (
    <nav className="absolute sticky top-0 shadow bg-[#F5F5F5] opacity-100 px-4 py-4 h-20 flex items-center justify-center">
      <div className="flex items-center justify-between w-4/5">
        <MobileNav open={open} setOpen={setOpen} />
        <div className="w-3/4 flex items-center">
          <a className="text-4xl font-semibold text-[#4E632E] " href="/">
          <img
          alt=" "
          src="/logoTransparentBg.png"
          height={95}
          width={95}
          className="ml-4 p-3"
        />
          </a>
        </div>
        <div className="w-9/12 flex justify-end items-center">
          <div
            className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-[#4E632E] rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""
                }`}
            />
            <span
              className={`h-1 w-full bg-[#4E632E] rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"
                }`}
            />
            <span
              className={`h-1 w-full bg-[#4E632E] rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""
                }`}
            />
          </div>

          <div className="hidden md:flex text-[#4E632E]">
            <NavLink className="no-underline hover:underline" to="/about">
              about
            </NavLink>
            <NavLink to="/login">login</NavLink>
            <NavLink to="/signup">sign up</NavLink>
            {/* <NavLink to="/cart2">
              <div onClick={getCart}>cart</div>
            </NavLink>
            <button onClick={logout}>log out</button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
