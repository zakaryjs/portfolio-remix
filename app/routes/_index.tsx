import type { MetaFunction } from "@remix-run/node";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl text-white">
          Zakary Sutherland
        </h1>
        <h2 className="text-3xl text-white mt-4">
          Junior Web Developer
        </h2>
        <div className="flex items-center justify-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
          <p className="text-sky2 text-xl m-6">A passionate and enthusiastic developer who loves to build and design for the web. I am well versed with the MERN stack, and am currently learning Rust and Typescript.</p>
        </div>
        <div className="flex justify-center items-center">
          <FaGithub onClick={() => window.open('https://github.com/zakaryjs', '_blank')} className="text-5xl mt-8 icon shadow-md cursor-pointer"/>
          <TiSocialLinkedin onClick={() => window.open('https://www.linkedin.com/in/zakary-sutherland/', '_blank')} className="text-5xl mt-8 ml-4 icon shadow-md cursor-pointer"/>
        </div>
        <button onClick={() => window.open('https://zakarysutherland.hashnode.dev/', '_blank')} className="flex items-center justify-center bg-sky2 shadow-md mt-8 rounded-lg w-3/6 h-10 mx-auto">
          <h3 className="text-2xl text-white">View My Blog</h3>
        </button>
      </div>
      <Footer />
    </div>
  );
}
