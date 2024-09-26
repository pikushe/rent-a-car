import { Heart, Notification, Setting2 } from "iconsax-react";
import Image from "next/image";
import Logo from "../../../../public/profile.png"
export default function Items() {
    return (
        <div className="flex flex-row gap-3 ml-auto items-center order-1">
            <div className="border border-secondary-200 rounded-full p-2.5 text-secondary-400">
                <Heart
                    variant="Bold" />
            </div>
            <div className="border border-secondary-200 rounded-full p-2.5 text-secondary-400 relative">
                <div className="bg-red-500 rounded-full p-1.5 absolute left-8 -top-0" />
                <Notification
                    variant="Bold" />
            </div>
            <div className="border border-secondary-200 rounded-full p-2.5 text-secondary-400">
                <Setting2
                    variant="Bold" />
            </div>
            <div className="rounded-full ">
                <Image src={Logo} alt="Profile"/>
            </div>
        </div>
    );
}
