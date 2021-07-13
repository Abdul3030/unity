import Image from 'next/image';
import Item from './Item';
import * as Ionic from 'react-icons/io5';
import {HiMenuAlt4} from 'react-icons/hi';
import { useContext, useState } from 'react';
import { CollapseContext } from '../../context/CollapseContext';



type adminDataType = {
    name: string,
    icon: keyof typeof Ionic,
    url: string,
};
type insightDataType = {
    name: string,
    icon: keyof typeof Ionic,
    badge: number,
    url: string,
};

type barDataType = {
    admin: adminDataType[],
    insight: insightDataType[]
};


const sidebarData:barDataType = {
    admin: [
        {
            name: 'Overview',
            icon: 'IoAnalytics',
            url: '/overview',
        },
        {
            name: 'Products',
            icon: 'IoBagOutline',
            url: '/',
        },
        {
            name: 'Campaigns',
            icon: 'IoStatsChart',
            url: '/',
        },
        {
            name: 'Schedules',
            icon: 'IoTimerOutline',
            url: '/',
        },
        {
            name: 'Payouts',
            icon: 'IoWalletOutline',
            url: '#',
        },
        {
            name: 'Statement',
            icon: 'IoListCircleOutline',
            url: '#',
        },
        {
            name: 'Settings',
            icon: 'IoSettingsOutline',
            url: '#',
        },
    ],
    insight: [
        {
            name: 'Inbox',
            icon: 'IoMailOutline',
            badge: 5,
            url: '#',
        },
        {
            name: 'Notifications',
            icon: 'IoNotificationsOutline',
            badge: 7,
            url: '#',
        },
        {
            name: 'Comments',
            icon: 'IoChatbubbleEllipsesOutline',
            badge: 3,
            url: '#',
        },
    ]
}

// ********************** Sidebar Component ******************** //

type SidebarProps = {
    name: string,
    collapseHandler: () => void,
    mobileMenuClose?: () => void,
}

const SideBar = ({collapseHandler, name, mobileMenuClose}:SidebarProps ) => {

    const [collapse, setCollapse] = useContext<any>(CollapseContext);
    

    return (
        <div className={`h-full flex flex-col justify-between`}>

            <div className="w-full">
                {/* ********* Sidebar Header ************ */}
                <div className="relative w-full flex items-center p-4 md:p-3">
                    <div className={`${ collapse ? 'hidden' : 'block'}`}>
                        <Image src="/logo.svg" width="176" height="47" alt="Logo"/>
                    </div>
                    <i onClick={collapseHandler} className="text-4xl cursor-pointer hidden md:block lg:hidden"><HiMenuAlt4/></i>
                    <div onClick={mobileMenuClose} className="md:hidden absolute right-2 text-unity-orange top-2 text-5xl">&times;</div>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <div className={`${collapse ? 'block' : 'hidden'} px-3`}>
                        <Image src="/shortlogo.png" layout="fixed" width="40" height="40" alt="Short Logo" />
                    </div>

                    {/* ************ Sidebar Items of Admin part */}

                    <h1 className="p-5 font-medium text-base text-unity-gray flex">
                        <span className={`${collapse ? 'text-xs -ml-2' : ''}`}>Admin</span>
                        {
                            <span className={`${collapse ? 'hidden' : 'block pl-1'}`}>tools</span>
                        }
                    </h1>
                    <div className="w-full border-b pb-10">
                        {
                            sidebarData.admin.map(({name, url, icon}, idx) => <Item key={idx}  url={url} icon={icon} name={name} />)
                        }
                    </div>

                    {/* *********** Sidebar Items of insight part */}

                    <h1 className="px-5 pt-10 pb-5 font-medium text-unity-gray text-base"><span className={`${collapse ? 'text-xs -ml-3' : ''}`}>Insights</span></h1>
                    
                    <div className="w-full">
                        {
                            sidebarData.insight.map(({name, url, icon, badge}, idx) => <Item key={idx} url={url} icon={icon} name={name} badge={badge} />)
                        }
                    </div>
                </div>
            </div>
            {/* *********** Sidebar Footer **************** */}
            <div className="w-full mt-10">
                <div className={`${collapse ? 'hidden' : 'block'} z-0 relative parent-shadow flex justify-center w-full bg-unity-lightpurple rounded-2xl mb-10`}>
                    <div className="w-full">
                        <div className="w-full flex justify-center">
                            <Image src="/sidebarbottom.png" width="200" height="200" alt="Side Bar Bottom" />
                        </div>
                        <div className="w-full p-5">
                            <button className="w-full p-5 font-bold bg-white text-unity-purple rounded-2xl">Get Pro Now</button>
                        </div>
                    </div>
                </div>
                <div className="w-full p-3 flex items-center justify-between">
                    <div className={`avatar rounded-full bg-blue-100 w-10 h-10 ${collapse ? '-ml-1' : ''}`}>
                        <Image src="/side-avatar.png" width="40" height="40" layout="fixed" alt="Avatar" />
                    </div>
                    <div className={`${collapse ? 'hidden' : 'block'} info font-medium`}>
                        <h1 className="text-sm">{name}</h1>
                        <h3 className="text-sm text-unity-gray">Free Account</h3>
                    </div>
                    <div className={`${collapse ? 'hidden' : 'block'} icon-group flex items-center justify-center`}>
                        <Image src="/small-right.svg" width="24" height="24" alt="Avtar" />
                    </div>
                </div>
            </div>
            {/* <style jsx>{`
                .parent-shadow:after{
                    content: " ";
                    position:absolute;
                    width: 95%;
                    height: 100%;
                    margin: auto;
                    bottom: 0;
                    height: 20px;
                    border-radius: 10px;
                    background: inherit;
                    z-index: 5;
                    -moz-box-shadow: 0px 5px 4px #888;
                    -webkit-box-shadow: 0px 5px 4px #888;
                    box-shadow: 0px 5px 2px #888;
                  }
            `}</style> */}
        </div>
    )
};

export default SideBar;