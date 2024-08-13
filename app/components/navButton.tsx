import Link from "next/link";
import {Button} from "@/app/types/types";
import React from "react";

const NavButton: React.FC<Button> = ({link, icon, text}) => {
    return (
        <li className={'border-2 rounded-full size-10 flex items-center justify-center shadow-purple-8 drop-shadow-sm shadow-lg'}>
            <Link href={link}>
                <div className="text-2xl">
                    {icon}
                </div>
            </Link>
        </li>
    )
}

export default NavButton;