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
        <div className="container mx-auto max-w-[1200px]">
            <div>
                <h1 className="text-3xl font-bold">Explore the <span className="text-[32px] bg-linear-30 from-[#FD5526] via-[#C1239B] to-[#8537E3] bg-clip-text text-transparent">Technologies</span></h1>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 col-span-3 gap-2">
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
                <div className=" col-span-1 card bg-base-100 w-[300px] p-8 shadow-sm">
                    <YourStuck addStuck={addStuck} setAddStuck={setAddStuck} />
                </div>
            </div>
        </div>
    );
};

export default Technology;