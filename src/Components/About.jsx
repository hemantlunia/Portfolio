import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
    const [data, setData] = useState([]);
    const [skills, setSkills] = useState([
        { name: "HTML", level: 80 },
        { name: "CSS", level: 75 },
        { name: "JavaScript", level: 87 },
        { name: "ReactJs", level: 80},
        { name: "ExpressJs", level: 65 },
        { name: "Tailwind", level: 70 }
    ]);

    useEffect(() => {
        setData("https://www.bing.com/th/id/OGC.cfe9306fc64acdaffcfe6d975ad9b6c7?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f0a%2f76%2f67%2f0a766796420d3489b98223f6819aff38.gif&ehk=E0w76N31ONpdPa6NcUeXAtnG%2fBZfSb4SpR7%2bilQgtoQ%3d");
    }, []);

    return (
        <div className="py-6 md:py-16 bg-[navy] min-h-screen">
            <div className="container mx-auto px-4 text-gray-200">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:gap-12">
                    <div className="md:w-1/2">
                        <img
                            className="rounded-full mx-auto"
                            src={data}
                            alt="image"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-2xl md:text-4xl font-bold mt-4 md:mt-0">
                            Hi, Myself Hemant Kumar, a passionate React.js developer.
                        </h2>
                        <p className="mt-3 mb-5">
                            My journey in the world of software development. With a fresh perspective and a solid foundation in React.js, I bring enthusiasm and a hunger to learn and grow in the ever-evolving tech landscape. My expertise lies in crafting interactive user interfaces and seamless user experiences through my understanding of components, state management, and the virtual DOM.I am committed to honing my skills and staying at the forefront of modern web development practices. Let's build something amazing together!
                        </p>
                        <hr className="border-gray-600" />
                        <h2 className="text-lg font-bold underline mt-4">Skills:</h2>
                        <div className="mt-4 flex flex-wrap">
                            {skills.map((skill, index) => (
                                <div key={index} className="w-full md:w-1/2 mb-4 flex items-center">
                                    <p className="text-yellow-300 ml-2">{skill.name} - {skill.level}%</p>
                                    <svg className="w-16 h-16 ml-2" viewBox="0 0 100 100">
                                        <circle className="skill-circle-bg" cx="50" cy="50" r="40" />
                                        <circle className="skill-circle" cx="50" cy="50" r="40" style={{ strokeDasharray: `${skill.level}, 100` }} />
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
