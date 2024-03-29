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
    <div>
      <h1 className="text-5xl text-white">
        Zakary Sutherland
      </h1>
      <h2 className="text-3xl text-white mt-4">
        Junior Web Developer
      </h2>
      <div className="flex justify-center items-center">
        <FaGithub className="text-5xl mt-8 icon shadow-md"/>
        <TiSocialLinkedin className="text-5xl mt-8 ml-4 icon shadow-md"/>
      </div>
      <div className="flex items-center justify-center bg-white shadow-md mt-20 rounded-lg h-10 border border-solid border-black/5">
        <h1 className="text-3xl text-sky2">About</h1>
      </div>
    </div>
  );
}
