import { NavLink } from "@remix-run/react";

export default function Navbar() {

    return (
        <nav className="flex fixed top-[0.2rem] left-1/2 transform -translate-x-1/2 justify-center items-center mx-auto bg-white shadow-md mt-8 rounded-lg h-10">
            <ul className="flex justify-center text-xl">
                <li className="mx-10">
                    <NavLink to="/" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
                        Home
                    </NavLink>
                </li>
                <li className="mx-10">
                    <NavLink to="/about" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
                        About
                    </NavLink>
                </li>
                <li className="mx-10">
                    <NavLink to="/skills" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
                        Skills
                    </NavLink>
                </li>
                <li className="mx-10">
                    <NavLink to="/projects" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
                        Projects
                    </NavLink>
                </li>
                <li className="mx-10">
                    <NavLink to="/contact" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}