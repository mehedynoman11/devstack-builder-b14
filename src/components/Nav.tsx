import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="flex justify-between items-center gap-4 container mx-auto max-w-[1200px] py-4">
                 <img src={Logo} alt="" />
            <ul className="hidden sm:flex gap-5">
                <li><a href="#">Home</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="flex gap-2">
                <button className="btn bg-white rounded-full">Sign In</button>
                <button className="btn rounded-full text-white bg-[#D91B7E]">Sign Up</button>
            </div>
            </div>
           
        </nav>
    );
};

export default Nav;