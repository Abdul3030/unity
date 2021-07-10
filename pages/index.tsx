import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import SideBar from '../components/Sidebar';
import Goal from '../components/Goal';
import Affiliate from '../components/Affiliate';
import User from '../components/Users';
import Sales from '../components/Sales';
import Progress from '../components/Progress';
import Income from '../components/Income';
import Summary from '../components/Summary';
import MobileNav from '../components/MobileNav';
import { useContext } from 'react';
import { CollapseContext } from '../context/CollapseContext';
import { useEffect } from 'react';



export default function Home() {

  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1023}, undefined, (match) => match ? setCollapse(true) : setCollapse(false));

  const [mobileMenu, setMobileMenu] = useState(false);

  const [collapse, setCollapse] = useContext<any>(CollapseContext);


  const sideBarCollapseHandler = () => {
        setCollapse(!collapse);
    };

  const mobileMenuHandler = () => {
        setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    if(!isTablet){
      setCollapse(false);
    }
  });
  
  console.log(collapse);
  return (
    <div className="w-full flex flex-col md:flex-row bg-white">
      <div className="w-full md:hidden">
        <MobileNav notificationCount={10} openMenu={mobileMenuHandler} />
      </div>
      <div onClick={mobileMenuHandler} className={`fixed transition-width duration-500 ease-out overflow-y-scroll z-30 top-0 left-0 bg-gray-500 bg-opacity-50 overflow-hidden md:hidden ${mobileMenu ? 'block w-full' : 'hidden w-0' }`}>
        <div onClick={(e) => e.stopPropagation()} className={`bg-white px-1 max-h-screen ${mobileMenu ? 'w-72' : 'w-0'} h-auto overflow-scroll z-40 transition-width duration-700 ease-in-out`}>
          <SideBar name="Tam Tran" mobileMenuClose={mobileMenuHandler} collapseHandler={mobileMenuHandler}  />
        </div>
      </div>
      <div className={`hidden md:block bg-white ${collapse ? 'w-22' : 'w-80'} pt-5 px-3 overflow-hidden transition-width duration-200 ease-out`}>
        <SideBar name="Tam Tran" collapseHandler={sideBarCollapseHandler}  />
      </div>
      <div className="w-full flex">
        <div className="w-full lg:w-2/3 pt-5 px-5 md:px-10 border-l">
          <div className="font-semibold">
            <div className="w-full flex justify-between">
              <div className="w-full ">
                <h3 className="text-lg">Hi Dash UI8,</h3>
                <h1 className="text-3xl mt-2 pl-5" >Campaigns</h1>
              </div>
              <div className="w-full hidden md:block lg:hidden">
                <div className="w-full flex justify-between items-center ">
                  <div className="flex justify-center items-center text-sm">
                    <span className="input-icon px-2"><Image src="/search.svg" width="16" height="16" alt="Search" /></span>
                    <input className="focus:outline-none w-20" type="text" name="search" id="search" placeholder="Search" />
                  </div>
                  <div className="relative w-8 h-8 flex justify-center items-center rounded-full shadow-lg">
                    <Image src="/bell.svg" width="18" height="18" alt="Notification" />
                    <div className="absolute flex justify-center items-center -right-2 -top-2 w-5 h-5 rounded-full text-white bg-unity-orange">
                      <p className="p-2 text-xs">5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full my-5 md:grid grid-cols-2 gap-5">
              <div className="col-span-2">
                <Summary collapse={collapse} />
              </div>
              <div className="w-full flex flex-col mt-10">
                <User />
                <Progress collapse={collapse} />
                <div className="w-full lg:hidden">
                  <Goal />
                </div>
              </div>
              <div className="w-full flex flex-col mt-10">
                <Income />
                <Sales collapse={collapse} />
                <div className="w-full lg:hidden">
                  <Affiliate />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 pt-5 px-8 border-l hidden lg:block">
            <div className="w-full flex justify-between items-center text-black">
              <div className="flex justify-center items-center text-sm">
                <span className="input-icon px-2"><Image src="/search.svg" width="16" height="16" alt="Search" /></span>
                <input className="focus:outline-none w-20" type="text" name="search" id="search" placeholder="Search" />
              </div>
              <div className="relative w-8 h-8 flex justify-center items-center rounded-full shadow-lg">
                <Image src="/bell.svg" width="18" height="18" alt="Notification" />
                <div className="absolute flex justify-center items-center -right-2 -top-2 w-5 h-5 rounded-full text-white bg-unity-orange">
                  <p className="p-2 text-xs">5</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Goal />
              <Affiliate />
            </div>
        </div>
      </div>
    </div>
  )
}
