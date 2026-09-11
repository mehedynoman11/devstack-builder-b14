import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../type/type";
import TechnologyCard from "./TechnologyCard";

interface YourStuckProps {
    addStuck: TechnologyType[]
    setAddStuck: Dispatch<SetStateAction<TechnologyType[]>>
}

const YourStuck = ({ addStuck, setAddStuck }: YourStuckProps) => {
    // console.log(addStuck)
    return (
        <div>
            <h2>Your Stuck</h2>
            <p className="text-gray-400">No technologies selected yet.</p>
            <div className="divider" />
            <p className="text-center text-gray-400 border p-4 rounded-2xl">Your stuck is empty.</p>

            {addStuck.map((stuck) => {
                return (
                    <div className="">
                        {stuck.name}
                    </div>
                )
            })}
        </div>
    );
};

export default YourStuck;