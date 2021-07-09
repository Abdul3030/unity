import React from 'react';
import SummaryItem from './Item';
import Image from 'next/image';
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

    const users = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>;
    const clicks = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.15 269.75a133.197 133.197 0 0 1-55.862 179.975l-42.782 22.541-10.52 5.533a71.277 71.277 0 0 1-62.966 1.685l-167.077-71.38 15.733-46.676 99.363 19.194-51.458-97.78-82.843-157.411 40.357-21.232 82.844 157.457 19.934-10.485-36.521-69.445 40.335-21.22 36.52 69.445 19.935-10.485-28.2-53.598 40.358-21.232 28.2 53.598 19.945-10.576-19.354-36.886 40.346-21.174 19.354 36.885 54.348 103.301zM73.268 146.674a60.03 60.03 0 0 1 42.361-102.459 60.098 60.098 0 0 1 56.58 80.169l10.588 20.013A78.29 78.29 0 0 0 115.708 26a78.233 78.233 0 0 0-5.635 156.262L99.428 162.02a59.688 59.688 0 0 1-26.16-15.346z"></path></svg>;
    const sales = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>;
    const items = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></svg>;

    const itemData:itemDataType[] = [
        {
            title: 'Users',
            amount: 36000,
            color: 'indigo',
            icon: users,
        },
        {
            title: 'Clicks',
            amount: 1000000,
            color: 'yellow',
            icon: clicks,
        },
        {
            title: 'Sales',
            amount: 327,
            color: 'red',
            icon: sales,
        },
        {
            title: 'Items',
            amount: 68,
            color: 'purple',
            icon: items,
        },
    ];


export default Summary;