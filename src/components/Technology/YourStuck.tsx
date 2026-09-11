import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../type/type";
import TechnologyCard from "./TechnologyCard";

interface YourStuckProps {
    addStuck: TechnologyType[]
    setAddStuck: Dispatch<SetStateAction<TechnologyType[]>>
}

const YourStuck = ({ addStuck, setAddStuck }: YourStuckProps) => {
    return (
        <div>
            <h2>Your Stuck</h2>
            <p className="text-gray-400">No technologies selected yet.</p>
            <div className="divider" />
            <p className="text-center text-gray-400 border p-4 rounded-2xl">Your stuck is empty.</p>
            {addStuck.map((stuck) => {
                return (
                    <div className="flex gap-4 my-3 items-center border rounded-xl">
                        <img className="w-10 pl-2" src={stuck.icon} alt="" />
                        <div className="p-3">
                            <h2 className="text-lg font-semibold">{stuck.name}</h2>
                            <p className="text-sm">{stuck.category}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default YourStuck;