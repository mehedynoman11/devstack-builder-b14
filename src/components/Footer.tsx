import footerImg from "../assets/logo-text.png"

const Footer = () => {

    const data = new Date();
    const year = data.getFullYear();
    return (
        <footer className="flex flex-col sm:flex-row sm:justify-between items-start my-20 gap-5 container mx-auto max-w-[1200px] ">
            <div className="px-5 py-3 sm:px-0 text-center sm:text-left">
                <img className="mb-5 w-40 sm:w-42 mx-auto sm:mx-0" src={footerImg} alt="" />
                <p className="mb-5 text-gray-500 w-full sm:w-120">Curated tools, technologies, and resources for developers building
                    modern software.</p>
                <div className='flex gap-3 mb-20 justify-center sm:justify-start'>
                    <a href="">Github</a>
                    <a href="">Twitter</a>
                    <a href="">Linkedin</a>
                </div>
                <p className="text-gray-500">&copy; {year} Dev Stack. All rights reserved.</p>
            </div>
            <div className="hidden sm:block">
                <h2 className="text-lg font-medium">Product</h2>
                <p className="text-gray-500">Home</p>
                <p className="text-gray-500">Technologies</p>
                <p className="text-gray-500">Projects</p>
            </div>
            <div className="hidden sm:block">
                <h2 className="text-lg font-medium">Company</h2>
                <p className="text-gray-500">About</p>
                <p className="text-gray-500">Contact</p>
                <p className="text-gray-500">Careers</p>
            </div>
            <div className="hidden sm:block">
                <h2 className="text-lg font-medium">Legal</h2>
                <p className="text-gray-500">Privacy Policy</p>
                <p className="text-gray-500">Terms of Service</p>
            </div>
        </footer>
    );
};

export default Footer;