import { Setting4 } from "iconsax-react";
import { SearchIcon } from "lucide-react";

export default function Search() {
    return (
        <div className="flex flex-row gap-5 border border-secondary-200 h-12 rounded-full py-2.5 px-5 hover:border-secondary-400 transition-all">
            <SearchIcon className="text-secondary-400" />
            <input type="text" className="outline-none text-secondary-400 w-[450px]" placeholder="Search something here..." />
            <Setting4 className="text-secondary-400" />
        </div>
    );
}
