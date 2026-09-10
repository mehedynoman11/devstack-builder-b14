import { use } from "react";
import type { TechnologyType } from "../../type/type";
import TechnologyCard from "./TechnologyCard";


interface TechnologyProps {
    technologyPromise: Promise<TechnologyType[]>
}


const Technology = ({ technologyPromise }: TechnologyProps) => {
    const technology = use(technologyPromise);
    // console.log(technology)
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">Explore the <span className="text-[32px] bg-linear-30 from-[#FD5526] via-[#C1239B] to-[#8537E3] bg-clip-text text-transparent">Technologies</span></h1>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>
            <div>
                {
                    technology.map((tech) => {
                        return (
                            <TechnologyCard key={tech.id} tech={tech}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Technology;