import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
    const [data, setData] = useState([]);
    const [skills, setSkills] = useState([
        { name: "HTML", level: 80 },
        { name: "‎ ‎ ‎ ‎ ‎ ‎‎ ‎  CSS", level: 75 },
        { name: "JavaScript", level: 87 },
        { name: "ReactJs", level: 80},
        { name: "ExpressJs", level: 65 },
        { name: "‎ ‎ ‎ ‎ Tailwind", level: 70 }
        
    ]);

    useEffect(() => {
        setData("https://www.bing.com/th/id/OGC.cfe9306fc64acdaffcfe6d975ad9b6c7?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f0a%2f76%2f67%2f0a766796420d3489b98223f6819aff38.gif&ehk=E0w76N31ONpdPa6NcUeXAtnG%2fBZfSb4SpR7%2bilQgtoQ%3d");
    }, [data]);

    return (
        <div className="py-16 bg-[navy] min-h-screen">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            className="rounded-full"
                            src={data}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-[white] font-bold md:text-4xl">
                        Hi, Myself Hemant Kumar, a passionate React.js developer.
                        </h2>
                        <h4 className="text-[white] mt-3 mb-5">My journey in the world of software development. With a fresh perspective and a solid foundation in React.js, I bring enthusiasm and a hunger to learn and grow in the ever-evolving tech landscape. My expertise lies in crafting interactive user interfaces and seamless user experiences through my understanding of components, state management, and the virtual DOM.I am committed to honing my skills and staying at the forefront of modern web development practices. Let's build something amazing together!</h4>
                        <hr />
                        <h2 className="text-[white] font-bold underline mt-1">Skills : -</h2>
                        <div className="mt-6 flex flex-wrap">
                            {skills.map((skill, index) => (
                                <div key={index} className="mb-4 flex items-center md:w-1/3">
                                    <p className="text-[yellow] ml-6 w-15">{skill.name}-{skill.level}%</p>
                                    <svg className="skill-chart w-15" viewBox="0 0 100 100">
                                        <circle
                                            className="skill-circle-bg"
                                            cx="50"
                                            cy="50"
                                            r="40"
                                        />
                                        <circle
                                            className="skill-circle"
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            style={{ strokeDasharray: `${skill.level}, 100` }}
                                        />
                                    </svg>
                                </div>
                            ))}
                        </div>
                        {/* <hr />
                        <h1 className="mt-4 text-[white]">
                           Projects:-
                        </h1> */}
                        {/* <hr />
                        <div>
                        <span className="text-[white] font-bold my-5">The News App : - </span><Link className="bg-[black] font-bold text-[white] px-2  hover:bg-[aqua] rounded hover:text-[purple] ml-8" to="https://github.com/hemantlunia/The-News-App-">View</Link>
                        </div>
                        <div>
                        <span className="text-[white] font-bold mt-5">The News App : - </span><Link className="bg-[black] font-bold text-[white] px-2  hover:bg-[aqua] mt-5 rounded hover:text-[purple] ml-8" to="https://github.com/hemantlunia/The-News-App-">View</Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}



