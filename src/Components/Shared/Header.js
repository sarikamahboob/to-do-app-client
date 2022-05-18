import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="bg-purple-100">
      <div class="navbar  max-w-7xl mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/addedtasks">Your Tasks</NavLink>
              </li>
              <li>
                {user ? (
                  <button onClick={logout} className="btn btn-ghost">
                    Sign Out
                  </button>
                ) : (
                  <Link to="/signin">Sign In</Link>
                )}
              </li>
            </ul>
          </div>
          <Link
            to="/"
            class="btn btn-ghost normal-case text-xl text-purple-700 font-bold"
          >
            ToDo
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/addedtasks">Your Tasks</NavLink>
            </li>
            <li>
              {user ? (
                <button onClick={logout} className="btn btn-ghost">
                  Sign Out
                </button>
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
