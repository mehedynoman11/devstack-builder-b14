import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="flex justify-between items-center gap-4 container mx-auto max-w-[1200px] py-4">
                 <img src={Logo} alt="" />
            <ul className="hidden sm:flex gap-4">
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div>
                <button className="btn rounded-full">Sign In</button>
                <button className="btn rounded-full text-white bg-[#D91B7E]">Sign Up</button>
            </div>
            </div>
           
        </nav>
    );
};

export default Nav;