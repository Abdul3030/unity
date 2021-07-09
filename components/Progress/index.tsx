import React from 'react';
import Link from 'next/link';
import ProgressItem from './ProgressItem';


type ItemDataType = {
    name: string,
    subname: string,
    amount: number,
};

const Progress = ({collapse}: {collapse: boolean}) => {

    const itemData:ItemDataType[] = [
        {
            name: 'Unity Comps',
            subname: 'New 3D Kit',
            amount: 35
        },
        {
            name: 'Unity Comps',
            subname: 'New 3D Kit',
            amount: 90
        },
        {
            name: 'Unity Comps',
            subname: 'New 3D Kit',
            amount: 65
        },
    ];
return (
    <div className="w-full shadow-md rounded-3xl p-5 flex flex-col my-5 justify-between">
        <div className="w-full flex justify-between">
            <h1 className="text-lg font-semibold">Icon Progress</h1>
        </div>
        <div className="w-full py-5">
            {
                itemData.map((item, idx) => <ProgressItem key={idx} collapse={collapse} name={item.name} subname={item.subname} amount={item.amount} />)
            }
        </div>
        <button className="w-full rounded-xl bg-black hover:bg-unity-purple py-5 font-medium  text-center text-white">
            <Link href="#" >
                <a>
                    Show all report
                </a>
            </Link>
        </button>
    </div>
) 

};

export default Progress;