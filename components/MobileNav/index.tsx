import React from 'react';
import Image from 'next/image';

type MobileNavProps = {
    notificationCount: number,
    openMenu: () => void,
};

const MobileNav = ({notificationCount, openMenu   }: MobileNavProps) => {

return (
    <div className="w-full border-b">
        <div className="p-5 flex justify-between items-center">
            <div onClick={openMenu} className="flex justify-between items-center text-3xl">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </div>
            <div className="menu flex items-center">
                <div className="search w-10 h-5">
                    <Image src="/search.svg" width="16" height="16" alt="Search" />
                </div>
                <div className="relative w-10 h-5">
                    <Image src="/bell.svg" width="18" height="18" alt="Notification" />
                    <div className="absolute flex justify-center items-center right-3 -top-3 w-5 h-5 rounded-full text-white bg-unity-orange">
                    <p className="p-2 text-xs">{notificationCount}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className={`avatar rounded-full bg-blue-100 w-8 h-8`}>
                        <Image src="/side-avatar.png" width="30" height="30" layout="fixed" alt="Avatar" />
                    </div>
                </div>
            </div>
        </div>
    </div>
) 

};

export default MobileNav;