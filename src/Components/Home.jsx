import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="bg-[navy] min-h-screen">
                <div className="mx-auto w-full max-w-7xl">
                    <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                                <h2 className="text-[red] text-4xl font-bold sm:text-5xl">
                                    Hemant Kumar
                                    <span className="hidden sm:block text-4xl">(Web Developer)</span>
                                </h2>

                                <Link
                                    className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                                    to="https://www.linkedin.com/in/hemant-kumar-7794a11aa"
                                >
                                    <svg
                                        fill="white"
                                        width="24"
                                        height="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    >
                                        <path d="M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z" fill="blue" />
                                    </svg>
                                    &nbsp; LinkedIn
                                </Link>
                            </div>
                        </div>

                        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                            <img className="w-full sm:w-110 rounded-md" src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image1" />
                        </div>
                    </aside>

                    <div className="grid  place-items-end sm:mt-20">
                        <img className="sm:w-96 w-70 rounded-2xl " src="https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=800" alt="image2" />
                    </div>

                    <h1 className="text-white text-center text-2xl sm:text-5xl py-10 font-medium">What if everything was a dict *and* an object?</h1>
                </div>
            </div>
        </>
    );
}
