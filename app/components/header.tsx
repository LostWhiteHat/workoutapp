import NavButton from "@/app/components/navButton";
import {TbLayoutDashboard} from "react-icons/tb";
import {FaDumbbell} from "react-icons/fa";
import {IoCogOutline, IoPersonOutline} from "react-icons/io5";

const buttons = [
    {
        name: "Home",
        icon: <TbLayoutDashboard/>,
        link: '/',
    },
    {
        name: 'Workouts',
        icon: <FaDumbbell/>,
        link: '/workouts',
    },
    {
        name: 'Settings',
        icon: <IoCogOutline/>,
        link: '/settings',
    },
    {
        name: 'Profile',
        icon: <IoPersonOutline/>,
        link: '/profile',
    }
]


export default function Header() {
    return (
        <header
            className="fixed z-50 bg-purple-5 bottom-0 left-0 right-0 h-14 flex items-center justify-between pl-2 pr-2">
            <nav className={'w-full m-5'}>
                <ul className='flex items-center justify-between flex-row'>
                    {buttons.map((button, i) => (
                        <NavButton icon={button.icon} key={i} link={button.link} text={button.name}/>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
