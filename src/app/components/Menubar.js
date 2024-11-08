"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  HiOutlineCalendar,
  HiOutlineStar,
  HiOutlineTemplate,
  HiOutlineLogout,
} from "react-icons/hi";
import { useRouter } from "next/navigation";

const Menubar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("You have been logged out.");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">WebShop</div>

        {isLoggedIn ? (
          <div className="hidden md:flex space-x-6">
            <div className="relative">
              <button
                className="hover:bg-gray-700 mr-6 px-3 py-2 rounded-md"
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              >
                Settings ⚙️
              </button>

              {isSettingsOpen && (
                <ul className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48">
                  <li className="p-2 hover:bg-gray-200 flex items-center">
                    <HiOutlineCalendar className="mr-2" />
                    <Link href="/settings/profile">Profile Form</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 flex items-center">
                    <HiOutlineStar className="mr-2" />
                    <Link href="/settings/specialization">Specialization</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 flex items-center">
                    <HiOutlineTemplate className="mr-2" />
                    <a href="/settings/templatemanager">Template Manager</a>
                  </li>
                  <li className="p-2 hover:bg-gray-200 flex items-center">
                    <HiOutlineTemplate className="mr-2" />
                    <Link href="/settings/admin">Admin Settings</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 flex items-center">
                    <HiOutlineTemplate className="mr-2" />
                    <Link href="/settings/claimant">Claimant</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 flex items-center">
                    <HiOutlineTemplate className="mr-2" />
                    <Link href="/settings/template">Template</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 flex items-center">
                    <HiOutlineStar className="mr-2" />
                    <Link href="/settings/arbitrator">Arbitrator</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 flex items-center">
                    <HiOutlineStar className="mr-2" />
                    <Link href="/settings/templaterepository">Template Repository</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 flex items-center">
                    <HiOutlineLogout className="mr-2" />
                    <button onClick={handleLogout} className="w-full text-left">
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        ) : (
          <div className="hidden md:flex space-x-6">
            <Link href="/login">
              <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600">
                Sign up
              </button>
            </Link>
          </div>
        )}

        <button
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className="md:hidden text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {isLoggedIn && isSettingsOpen && (
        <div className="md:hidden bg-white text-black">
          <div className="p-2">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-200">
              Settings ⚙️
            </button>
            <ul className="pl-4">
            <li className="p-2 hover:bg-gray-200 flex items-center">
                    <HiOutlineCalendar className="mr-2" />
                    <Link href="/settings/profile">Profile Form</Link>
                  </li>
              <li className="p-2 hover:bg-gray-100 flex items-center">
                <HiOutlineStar className="mr-2" />
                <Link href="/settings/specialization">Specialization</Link>
              </li>
              <li className="p-2 hover:bg-gray-100 flex items-center">
                <HiOutlineTemplate className="mr-2" />
                <Link href="/settings/templatemanager">Template Manager</Link>  
              </li>
              <li className="p-2 hover:bg-gray-100 flex items-center">
                <HiOutlineTemplate className="mr-2" />
                <Link href="/settings/admin">Admin Settings</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 flex items-center">
                    <HiOutlineTemplate className="mr-2" />
                    <Link href="/settings/claimant">Claimant</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 flex items-center">
                    <HiOutlineTemplate className="mr-2" />
                    <Link href="/settings/template">Template</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 flex items-center">
                    <HiOutlineStar className="mr-2" />
                    <Link href="/settings/arbitrator">Arbitrator</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 flex items-center">
                    <HiOutlineStar className="mr-2" />
                    <Link href="/settings/templaterepository">Template Repository</Link>
                  </li>
              <li className="p-2 hover:bg-gray-100 flex items-center">
                <HiOutlineLogout className="mr-2" />
                <button onClick={handleLogout} className="w-full text-left">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}

      {!isLoggedIn && isSettingsOpen && (
        <div className="md:hidden bg-white text-black">
          <div className="p-2">
            <Link href="/login">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-200">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-200">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menubar;
