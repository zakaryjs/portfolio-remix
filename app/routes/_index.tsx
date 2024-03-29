import type { MetaFunction } from "@remix-run/node";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <h1 className="text-5xl text-white">
        Zakary Sutherland
      </h1>
      <h2 className="text-3xl text-white mt-4">
        Junior Web Developer
      </h2>
      <div className="flex justify-center items-center">
        <FaGithub onClick={() => window.open('https://github.com/zakaryjs', '_blank')} className="text-5xl mt-8 icon shadow-md cursor-pointer"/>
        <TiSocialLinkedin onClick={() => window.open('https://www.linkedin.com/in/zakary-sutherland/', '_blank')} className="text-5xl mt-8 ml-4 icon shadow-md cursor-pointer"/>
      </div>
      <button onClick={() => window.open('https://zakarysutherland.hashnode.dev/', '_blank')} className="flex items-center justify-center bg-sky2 shadow-md mt-8 rounded-lg w-3/6 h-10 mx-auto">
        <h3 className="text-2xl text-white">View My Blog</h3>
      </button>
      {/* <div className="flex items-center justify-center bg-white shadow-md mt-20 rounded-lg h-10 border border-solid border-black/5">
        <h1 className="text-3xl text-sky2">About</h1>
      </div> */}
    </div>
  );
}
