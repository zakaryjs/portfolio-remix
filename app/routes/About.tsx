import Navbar from "~/components/Navbar"



export default function About() {
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center bg-white shadow-md mt-20 rounded-lg h-10 border border-solid border-black/5">
                <h1 className="text-3xl text-sky2">About</h1>
            </div>
            <div className="flex items-center justify-center bg-white shadow-md mt-8 rounded-lg w-[750px] mx-auto">
                    <p className="text-sky2 text-xl m-6">Hi! My name is Zakary. I&apos;m a tech enthusiast, gamer, and keen learner. I have always had a love for all things tech, and have had an interest in programming since a very young age.</p>
            </div>
        </div>
    )
}