import { type Dispatch, type SetStateAction } from 'react';
import star from "/star.svg"
import type { TechnologyType } from '../../type/type';
import { Bounce, toast } from 'react-toastify';

interface TechnologyCardProps {
    tech: TechnologyType;
    addStuck: TechnologyType[]
    setAddStuck: Dispatch<SetStateAction<TechnologyType[]>>
}

const TechnologyCard = ({ tech, addStuck, setAddStuck }: TechnologyCardProps) => {

    // const [selectedCard, setSelectedCard] = useState(false);

    // console.log(addStuck)
    const isSelected = addStuck.some(
        (item) => item.id === tech.id
    );

    const handleSelectedCard = () => {
        toast.success("Stuck selected successfully.", {
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
        setAddStuck([...addStuck, tech]);
        // console.log(setAddStuck)
    }

    return (
        <div
            className={`card bg-base-100 ${isSelected === true ? "border-2" : "border-none"
                } w-full p-8 shadow-sm cursor-pointer transition-all`}>
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
            <div className="flex justify-between gap-3 border-t border-gray-200">
                <p className="text-sm">{tech.category}</p>
                <p className="text-sm">{tech.difficulty}</p>
                <p className="text-sm flex gap-1 items-center">{tech.rating} <img className="w-4" src={star} /></p>
            </div>
            <button onClick={() => handleSelectedCard()} disabled={isSelected} className={`btn w-full rounded-xl ${isSelected === true ? "bg-[#c9ccd5]" : "bg-[#0A0F1D]"} text-white my-5`}>{isSelected === true ? "Added to Stuck" : "Add to Stuck"}</button>

        </div>
    );
};

export default TechnologyCard;