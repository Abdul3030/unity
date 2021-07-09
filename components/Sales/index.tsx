import React from 'react';
import Link from 'next/link';
import SalesItem from './SalesItem';

type ItemDataType = {
    name: string,
    subname: string,
    amount: number,
};

const Sales = ({collapse}: {collapse: boolean}) => {

    const itemData:ItemDataType[] = [
        {
            name: 'Unity Comps',
            subname: "New 3D Kit",
            amount: 35
        },
        {
            name: 'Unity Comps',
            subname: "New 3D Kit",
            amount: 35
        },
        {
            name: 'Unity Comps',
            subname: "New 3D Kit",
            amount: 35
        },
    ];
return (
    <div className="w-full shadow-md rounded-lg p-5 flex flex-col my-5 justify-between">
        <div className="w-full flex justify-between">
            <h1 className="text-lg font-semibold">Latest Sales</h1>
            <i className="font-bold text-lg">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd"></path>
                    <path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd"></path>
                </svg>
                </i>  
        </div>
        <div className="w-full py-5">
           {
               itemData.map(({name, subname, amount}, idx) => 
               <SalesItem 
                key={idx} 
                collapse={collapse}
                name={name} 
                subname={subname} 
                amount={amount} 
                />)
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

export default Sales;