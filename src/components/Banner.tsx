import bannerImg from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <header className="container mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:justify-between gap-6 items-center p-6 sm:p-0">
                <div className="text-center sm:text-left">
                    <h1 className="text-3xl sm:text-4xl font-bold">Build Your Ideal <br />
                        <span className="text-[30px] sm:text-[40px] bg-linear-30 from-[#FD5526] via-[#C1239B] to-[#8537E3] bg-clip-text text-transparent">Development Stack</span></h1>
                    <p className="mt-4 w-full sm:w-98">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                    <div className="flex justify-center sm:justify-start gap-4 mt-8">
                        <button className="btn rounded-xl bg-linear-100 from-[#F87020] to-[#ED4B91] text-white">Explore Technologies</button>
                        <button className="btn rounded-xl">Learn More</button>
                    </div>
                </div>
                <img className="w-100 sm:flex sm:justify-self-end" src={bannerImg} alt="Banner" />
            </div>
        </header>
    );
};

export default Banner;