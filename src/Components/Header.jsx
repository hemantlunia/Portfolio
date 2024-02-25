import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="mr-3 h-12 rounded-full"
                            alt="Logo"
                        />
                    </Link>

                    <div className="block lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-[red] hover:border-white"
                        >
                            <svg
                                className="w-3 h-3 fill-current"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`${
                            isMenuOpen ? "block" : "hidden"
                        } lg:flex lg:items-center w-full lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
