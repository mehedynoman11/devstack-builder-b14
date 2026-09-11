import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../type/type";
import { Bounce, toast } from "react-toastify";
import { ImCross } from "react-icons/im";


interface YourStuckProps {
    addStuck: TechnologyType[]
    setAddStuck: Dispatch<SetStateAction<TechnologyType[]>>
}

const YourStuck = ({ addStuck, setAddStuck }: YourStuckProps) => {

    const handleRemoveStuck = (stucks: TechnologyType) => {
        const restStuck = addStuck.filter((selectedStuck) => selectedStuck.id != stucks.id);
        setAddStuck(restStuck);
        toast.success("Stuck has been deleted successfully!", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })
    }

    const handleRemoveAll = () => {
        setAddStuck([]);
    }
    return (
        <div className="">
            <h2 className="text-2xl font-bold">Your Stuck</h2>
            <p className="text-gray-400">{addStuck.length <= 0 ? "No technologies selected yet." : `${addStuck.length} Technology selected`}</p>
            <div className="divider" />
            {addStuck.length <= 0 ? <p className="text-center text-gray-400 border p-4 rounded-2xl">Your stuck is empty.</p> : ""}
            {addStuck.map((stuck) => {
                return (
                    <div key={stuck.id} className="flex gap-4 my-3 items-center justify-between border rounded-xl">
                        <img className="w-10 pl-2" src={stuck.icon} alt="" />
                        <div className="p-3">
                            <h2 className="text-lg font-semibold">{stuck.name}</h2>
                            <p className="text-sm">{stuck.category}</p>
                        </div>
                        <p onClick={() => handleRemoveStuck(stuck)} className="  text-red-700 rounded-2xl px-2 mr-2 text-sm cursor-pointer"><ImCross /></p>
                    </div>
                )
            })}
            {addStuck.length > 1 ? <button onClick={()=>handleRemoveAll()} className="btn btn-outline btn-error px-10 py-5 w-full rounded-xl mt-5">Remove All</button> : ""}
        </div>
    );
};

export default YourStuck;