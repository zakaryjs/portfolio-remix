import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";


export default function Contact() {

    return (
        <div className="">
            <Navbar />
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-5xl text-white">
                    Contact Me
                </h1>
                <div className="flex flex-col items-center justify-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                    <p className="text-sky2 text-xl m-6">
                        Like what you see? Would you like to get in touch?
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                    <p className="text-sky2 text-xl m-6">
                        Feel free to reach me through the following channels!
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <TiSocialLinkedin onClick={() => window.open('https://www.linkedin.com/in/zakary-sutherland/', '_blank')} className="text-5xl mt-8 ml-4 icon shadow-md cursor-pointer"/>
                    <IoMdMail onClick={() => window.open('mailto:zakarys2005@gmail.com')} className="text-5xl mt-8 ml-4 icon shadow-md cursor-pointer" />
                </div>
            </div>
            <Footer />
        </div>
    )
}