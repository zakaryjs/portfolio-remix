import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { FaGithubAlt } from "react-icons/fa";
import { MetaFunction } from "@remix-run/react";
import { motion } from "framer-motion"

export const meta: MetaFunction = () => {
    return [
      { title: "Zakary Sutherland" },
      { name: "description", content: "Zakary Sutherland Personal Portfolio" },
    ];
  };

export default function Projects() {

    return (
        <div className="">
            <Navbar />
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            >
                <div className="flex flex-col justify-center items-center mt-8">
                <h1 className="text-5xl text-white">
                    Projects
                </h1>
                <div className="flex flex-col items-center justify-center text-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                    <h3 className="text-3xl text-sky2 mt-4">Codenames Clone</h3>
                    <p className="text-sky2 text-xl m-6">This project is a clone of the popular game Codenames. Built with React, Express and Socket.IO, the Spymasters must provide clues to help their operatives guess the correct words.</p>
                    <FaGithubAlt onClick={() => window.open('https://github.com/zakaryjs/codenames-frontend', '_blank')} className="text-5xl mt-2 mb-4 square-icon cursor-pointer"/>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                    <h3 className="text-3xl text-sky2 mt-4">Pokemon Day Care Manager</h3>
                    <p className="text-sky2 text-xl m-6">This project is an app built to manage a Pokemon Day Care. Built with the MERN stack, this app provides both day care owners and trainers to add Pokemon the database, which can then be used to create appointments.</p>
                    <FaGithubAlt onClick={() => window.open('https://github.com/zakaryjs/PokemonDayCare-Frontend', '_blank')} className="text-5xl mt-2 mb-4 square-icon cursor-pointer"/>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                    <h3 className="text-3xl text-sky2 mt-4">Media Management API</h3>
                    <p className="text-sky2 text-xl m-6">This project is an API built to manage stored physical media. Built with Flask, this API allows users to add their media to a database in order to keep track of what is owned.</p>
                    <FaGithubAlt onClick={() => window.open('https://github.com/zakaryjs/CA-T2A2-Webserver_API', '_blank')} className="text-5xl mt-2 mb-4 square-icon cursor-pointer"/>
                </div>
                </div>
            </motion.div>
            <Footer />
        </div>
    )
}