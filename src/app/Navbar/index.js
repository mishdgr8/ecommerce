"use client";

import { Fragment } from "react";

const isAdmin = false;
const isAuthUser = false;

export default function Navbar() {
  return (
    <nav className="bg-white fixed z-20 top-0 w-full left-0 border-b border-gray-200">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center cursor-pointer">
          <span className=" self-center text-2xl font-semibold whitespace-nowrap">
            Ecommerce
          </span>
        </div>
        <div className="flex md:order-2 gap-2">
          {!isAdmin && isAuthUser ? (
            <Fragment>
              <button>Account</button>
              <button>Cart</button>
            </Fragment>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
