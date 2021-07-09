import React from 'react';
import SummaryItem from './Item';
import Image from 'next/image';
import {FaUserAlt, FaShoppingBag, FaListAlt} from 'react-icons/fa';
import {GiClick} from 'react-icons/gi';
import SummaryChart from '../Recharts/SummaryChart';

type SummaryProps = {
    collapse: boolean
};

type itemDataType = {
    title: string,
    amount: number,
    color: string,
    icon: JSX.Element | JSX.Element[],
};


const Summary = ({collapse}:SummaryProps) => {

    
    
const amountShortner = (amount: any ) => {
    if(amount >= 1000 && amount < 1000000) return ((amount / 1000) + 'k')
                        else if (amount >= 1000000) return ((amount / 1000000) + 'm');
                        else return amount;
};

return (
    <div className="w-full shadow-sm md:shadow-md rounded-2xl">
        <div className="sm:p-5">
            <h1 className="text-xl font-bold py-10">Active User right now <span className="font-light text-yellow-200">💡</span></h1>
            <div className="w-full md:flex">
                <div className="md:w-52 flex md:flex-col justify-between">
                    <div className="w-full">
                        <h1 className="text-6xl text-bold font-number">478</h1>
                        <div className="w-full md:border-b flex items-center py-5">
                            <i className="w-10 h-10 rounded-lg bg-red-300">
                                <Image src="/volume.png" alt="Views" width="50" height="50" />
                            </i>
                            <p className="text-sm text-indigo-400 pl-5">Page views <br/>per minute</p>
                        </div>
                    </div>
                    
                    <div className="w-full h-auto flex flex-col justify-between">
                        <div className="flex items-center py-3">
                            <div className="line">
                                <Image src="/Path.png" width="78" height="24" alt="Path" />
                            </div>
                            <div className="text-blue-500 text-lg pl-2">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm289.1-43.4c7.5-7.5 19.8-7.5 27.3 0 3.8 3.8 5.6 8.7 5.6 13.6s-1.9 9.9-5.7 13.7l-94.3 94c-7.6 6.9-19.3 6.7-26.6-.6l-95.7-95.4c-7.5-7.5-7.6-19.7 0-27.3 7.5-7.5 19.7-7.6 27.3 0l81.1 81.9 81-79.9z"></path></svg>
                            </div>
                            <p className="text-blue-500 pl-1 font-number">6%</p>
                        </div>
                        <p className="text-unity-gray text-sm pb-5 md:pb-0">Update your payout method in Setting</p>
                    </div>
                </div>
                <div className="w-full px-2 h-64 relative">
                    <div className="w-full rounded-2xl flex-col justify-evenly bg-blue-500">
                        <div className="w-full h-32 border-b border-gray-300"></div>
                        <div className="relative w-full h-32">
                            <div className="tick absolute"></div>
                        </div>
                    </div>
                    <div className="absolute z-10 w-full sm:px-5 h-full top-0 left-0">
                        <SummaryChart />
                    </div>
                </div>
            </div>
            <div className={`w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 ${!collapse ? 'md:grid-cols-2' : 'md:grid-cols-4'} my-10 justify-evenly items-center bg-gray-100 gap-0.5 border-2 border-gray-100 overflow-hidden  rounded-2xl`}>
                {
                    itemData.map((item, idx) => <SummaryItem key={idx} title={item.title} collapse={collapse} amount={amountShortner(item.amount) + (idx === 2 ? '$' : '')} color={item.color} icon={item.icon} />)
                }
            </div>
        </div>
        <style jsx>
            {`
                .tick{
                    border: 10px solid;
                    border-color: transparent transparent transparent #fff;
                    top: -10px;
                }
            `}
        </style>
    </div>
) 

};

    const itemData:itemDataType[] = [
        {
            title: 'Users',
            amount: 36000,
            color: 'indigo',
            icon: <FaUserAlt />,
        },
        {
            title: 'Clicks',
            amount: 1000000,
            color: 'yellow',
            icon: <GiClick/>,
        },
        {
            title: 'Sales',
            amount: 327,
            color: 'red',
            icon: <FaShoppingBag/>,
        },
        {
            title: 'Items',
            amount: 68,
            color: 'purple',
            icon: <FaListAlt/>,
        },
    ];


export default Summary;