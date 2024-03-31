import Footer from "~/components/Footer"
import Navbar from "~/components/Navbar"


export default function About() {
    return (
        <div className="">
            <Navbar />
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-5xl text-white">
                    About
                </h1>
                {/* <div className="flex items-center justify-center bg-white shadow-md mt-20 rounded-lg h-10 border border-solid border-black/5">
                    <h1 className="text-3xl text-sky2">About</h1>
                </div> */}
                <div className="flex items-center justify-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                        <p className="text-sky2 text-xl m-6">Hi! My name is Zakary. I&apos;m a tech enthusiast, gamer, and keen learner. I have always had a love for all things tech, and have had an interest in programming since a very young age.</p>
                </div>
                <div className="flex items-center justify-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                    <p className="text-sky2 text-xl m-6">My first ever experience with programming was in 2013 with Code.org. I then continued to experiment with various resources throughout my school years and by the time I graduated in 2022, I knew I wanted to pursue a career in tech.</p>
                </div>
                <div className="flex items-center justify-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                    <p className="text-sky2 text-xl m-6">When I&apos;m not programming, I am either spending time with family and friends, enjoying video games and anime, and thinking about future project ideas.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}