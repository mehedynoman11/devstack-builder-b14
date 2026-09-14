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

    const badgeColors: Record<string, { bg: string; text: string }> = {
        "Popular": { bg: "#FFF7ED", text: "#EF8044" },
        "Fast": { bg: "#FEF2F2", text: "#EF4444" },
        "Essential": { bg: "#EFF6FF", text: "#3B82F6" },
        "Containers": { bg: "#ECFEFF", text: "#06B6D4" },
        "Easy to Learn": { bg: "#F0FDF4", text: "#22C55E" },
        "Enterprise": { bg: "#FAF5FF", text: "#A855F7" },
        "Lightweight": { bg: "#FEFCE8", text: "#CA8A04" },
        "Batteries Included": { bg: "#F0FDFA", text: "#14B8A6" },
        "Top SQL": { bg: "#EEF2FF", text: "#6366F1" },
        "Memory Safe": { bg: "#FFF1F2", text: "#F43F5E" },
        "Widely Used": { bg: "#F7FEE7", text: "#65A30D" },
        "Classic": { bg: "#FDF4FF", text: "#C026D3" },
        "Orchestration": { bg: "#F0F9FF", text: "#0284C7" },
        "CI/CD": { bg: "#FFFBEB", text: "#D97706" },
        "Design": { bg: "#FDF2F8", text: "#DB2777" },
    };

    const defaultBadgeColor = { bg: "#F3F4F6", text: "#4B5563" };

    const getBadgeColor = (badge: string) => badgeColors[badge] ?? defaultBadgeColor;
    const { bg, text } = getBadgeColor(tech.badge);

    return (
        <div
            className={`card bg-base-100 ${isSelected === true ? "border-2" : "border-none"
                } w-full p-4 shadow-sm rounded-2xl transition-all`}>
            <div className="flex justify-between items-center">
                <img
                    src={tech.icon}
                    className="w-10 mb-4 flex justify-start"
                />
                <p style={{ backgroundColor: bg, color: text }} className="text-sm font-semibold rounded-2xl p-2">{tech.badge}</p>
            </div>
            <div className="w-full text-left text-sm">
                <h2 className="card-title font-bold mb-2">{tech.name}</h2>
                <p className="mb-6 md:h-16 wrap-break-word whitespace-normal text-gray-500">{tech.description}</p>
            </div>
            <div className="flex justify-between items-center gap-3 border-t pt-2 mb-2 border-gray-200">
                <button className="btn btn-sm text-sm text-gray-500">{tech.category}</button>
                <p className="text-[14px] text-gray-500">{tech.difficulty}</p>
                <p className="text-sm flex gap-1 items-center">{tech.rating} <img className="w-4" src={star} /></p>
            </div>
            <button onClick={() => handleSelectedCard()} disabled={isSelected} className={`btn w-full rounded-xl ${isSelected === true ? "bg-[#c9ccd5]" : "bg-[#0A0F1D]"} text-white my-5`}>{isSelected === true ? "Added to Stuck" : "Add to Stuck"}</button>

        </div>
    );
};

export default TechnologyCard;