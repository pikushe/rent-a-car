import { cn } from "@/lib/utils";
interface Props {
    no: number,
    head: string,
    description: string,
}


export default function RentalCard(props: Props) {
    return (
        <div className={cn("w-[640px] h-[360px] rounded-xl bg-cover p-6 text-white flex flex-col gap-4 text-start items-start", props.no == 1 ? "bg-information bg-[url('/Home/Card.png')] " : "bg-primary bg-[url('/Home/Card2.png')]")}>
            <h3 className="text-4xl max-w-72 font-semibold">{props.head}</h3>
            <p className="text-[1rem] max-w-72">{props.description}</p>
            <button className={cn("px-5 py-[10px] rounded-lg font-semibold hover:scale-105 transition-all", props.no == 1 ? "bg-primary" : "bg-information")}>
                Rental Car
            </button>
        </div>
    );
}

/*

    TODO: Props olayı 2'si farklı olacak

*/