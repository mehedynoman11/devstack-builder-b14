import React from 'react';
import star from "../../../public/star.svg"
import type { TechnologyType } from '../../type/type';

interface TechnologyCardProps {
    tech: TechnologyType;
}

const TechnologyCard = ({tech}:TechnologyCardProps) => {
    return (
        <div className="card bg-base-100 w-[280px] p-8 shadow-sm">
                                <div className="flex justify-between">
                                    <img
                                        src={tech.icon}
                                        className="w-10"
                                    />
                                    <p className="bg-[#FFF7ED] text-[#EF8044] font-semibold rounded-2xl p-2">{tech.badge}</p>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-bold">{tech.name}</h2>
                                    <p className="">{tech.description}</p>
                                </div>
                                <div className="flex justify-between gap-3">
                                    <p className="text-sm">{tech.category}</p>
                                    <p className="text-sm">{tech.difficulty}</p>
                                    <p className="text-sm flex gap-1 items-center">{tech.rating} <img className="w-[16px]" src={star}/></p>
                                </div>
                                    <button className="btn w-full rounded-xl bg-[#0A0F1D] text-white my-5">Add to Stuck</button>
                                
                            </div>
    );
};

export default TechnologyCard;