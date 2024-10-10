import RentalCard from "./Card";
import RentalInput from "./Input";
import { ArrowDownUp } from 'lucide-react';

export default function RentalCar() {
    return (
        <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-row justify-center gap-8">
                <RentalCard no={1} head="The Best Platform for Car Rental" description="Ease of doing a car rental safely and reliably. Of course at a low price." />
                <RentalCard no={2} head="Easy way to rent a car at a low price" description="Providing cheap car rental services and safe and comfortable facilities." />
            </div>
            <div className="flex flex-row justify-center items-center gap-8">
                <RentalInput />
                <button className="flex bg-primary text-white items-center justify-center w-[60px] h-[60px] rounded-lg"><ArrowDownUp /></button>
                <RentalInput />
            </div>

        </div>
    );
}