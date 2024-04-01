import Navbar from "~/components/Navbar";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import Footer from "~/components/Footer";



export default function Skills() {

    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center mt-8">
                <h1 className="text-5xl text-white">
                    Skills
                </h1>
                <div className="flex items-center justify-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                    <IoLogoJavascript className="text-9xl text-sky1 ml-6"/>
                    <p className="text-sky2 text-xl m-6">
                        JavaScript is a programming language that is used to implement advanced features on web pages, such as displaying animations, content updates, and 3D graphics.
                    </p>
                </div>
                <div className="flex items-center justify-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                    <FaNodeJs className="text-7xl text-sky1 ml-6"/>
                    <p className="text-sky2 text-xl m-6">
                        NodeJS is a JavaScript runtime that runs on the V8 engine. It is commonly used for command line tools.
                    </p>
                </div>
                <div className="flex items-center justify-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                    <SiExpress className="text-7xl text-sky1 ml-6"/>
                    <p className="text-sky2 text-xl m-6">
                        ExpressJS is a web framework that is used to build RESTful APIs in JavaScript.
                    </p>
                </div>
                <div className="flex items-center justify-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                    <FaReact className="text-6xl text-sky1 ml-6"/>
                    <p className="text-sky2 text-xl m-6">
                        React is a library that is used to build component based user interfaces.
                    </p>
                </div>
                <div className="flex items-center justify-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                    <FaPython className="text-6xl text-sky1 ml-6"/>
                    <p className="text-sky2 text-xl m-6">
                        Python is an interpreted programming language that is commonly used in AI and machine learning.
                    </p>
                </div>
                <div className="flex items-center justify-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                    <SiFlask className="text-6xl text-sky1 ml-6"/>
                    <p className="text-sky2 text-xl m-6">
                        Flask is a minimalist web framework that is used to create web APIs.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}