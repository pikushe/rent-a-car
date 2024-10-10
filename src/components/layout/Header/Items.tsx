import { Heart, Notification, Setting2 } from "iconsax-react";
import Image from "next/image";
import Logo from "../../../../public/profile.png"
export default function Items() {
    return (
        <div className="flex flex-row gap-3 ml-auto items-center order-1">
            <div className="border border-secondary-200 rounded-full p-9px text-secondary-400 hover:bg-secondary-200 transition-all duration-200 ">
                <Heart
                    variant="Bold" />
            </div>
            <div className="border border-secondary-200 rounded-full p-9px text-secondary-400 hover:bg-secondary-200 relative transition-all duration-200 ">
                <div className="bg-red-500 rounded-full p-1.5 absolute left-8 -top-0" />
                <Notification
                    variant="Bold" />
            </div>
            <div className="border border-secondary-200 rounded-full p-9px hover:bg-secondary-200 text-secondary-400 transition-all duration-200 ">
                <Setting2
                    variant="Bold" />
            </div>
            <div className="rounded-full transition-all duration-200 hover:scale-105">
                <Image src={Logo} alt="Profile"/>
            </div>
        </div>
    );
}
