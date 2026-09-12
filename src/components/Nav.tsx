import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <nav className="sm:sticky sm:top-0 sm:z-50 bg-white">
            <div className="flex justify-between items-center container mx-auto max-w-[1200px] py-3 px-3 sm:py-4 sm:px-0">
                <div className="block text-3xl sm:hidden"><RxHamburgerMenu /></div>
                <a href="/"><img className="w-28 sm:w-40" src={Logo} alt="" /></a>
                <ul className="hidden sm:flex gap-5">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="flex gap-1 sm:gap-2">
                    <button className="btn bg-white rounded-full btn-sm sm:btn-md">Sign In</button>
                    <button className="btn btn-sm sm:btn-md rounded-full text-white bg-[#D91B7E]">Sign Up</button>
                </div>
            </div>

        </nav>
    );
};

export default Nav;