import { use, useState } from "react";
import type { TechnologyType } from "../../type/type";
import TechnologyCard from "./TechnologyCard";
import YourStuck from "./YourStuck";


interface TechnologyProps {
    technologyPromise: Promise<TechnologyType[]>
}


const Technology = ({ technologyPromise }: TechnologyProps) => {
    const technology = use(technologyPromise);

    const [addStuck, setAddStuck] = useState<TechnologyType[]>([]);

    return (
        <div className="container mx-auto max-w-[1200px] p-5 sm:p-0">
            <div className="text-center sm:text-left">
                <h1 className="text-[26px] sm:text-3xl font-bold mb-2 ">Explore the <span className="text-[27px] sm:text-[32px] bg-linear-30 from-[#DB4BA9] to-[#C1239B] bg-clip-text text-transparent">Technologies</span></h1>
                <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-span-3 gap-4">
                    {
                        technology.map((tech) => {
                            return (
                                <TechnologyCard key={tech.id}
                                    tech={tech} 
                                    addStuck={addStuck}
                                    setAddStuck={setAddStuck}
                                    />
                            )
                        })
                    }
                </div>
                <div className=" col-span-1 card bg-base-100 md:p-4 w-full mx-auto shadow-sm">
                     <YourStuck addStuck={addStuck} setAddStuck={setAddStuck} />
                </div>
            </div>
        </div>
    );
};

export default Technology;