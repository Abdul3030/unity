import React from 'react';
import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

type SalesItemProps = {
    name: string,
    subname: string,
    amount: number,
    collapse: boolean,
};

const SalesItem = ({name, subname, amount, collapse}: SalesItemProps) => {

return (
    <div className="w-full flex justify-between py-3 ">
        <div className={`w-12 h-12 ${!collapse ? 'md:w-10 md:h-10' : 'md:w-12 md:h-10'} bg-red-100 flex justify-center items-center rounded-lg`}>
            <Image src="/goal.png" width="48" height="48" alt="Feature Image" />
        </div>
        <div className="">
            <h2 className={`text-lg ${!collapse ? 'md:text-sm ' : 'md:text-lg'} font-semibold`}>{name}</h2>
            <h4 className="text-unity-gray font-normal text-xs font-body">{subname}</h4>
        </div>
        <div className={`w-12 h-12 ${!collapse ? 'md:w-10 md:h-10' : 'md:w-12 md:h-10'} font-semibold text-lg`}>
            <CircularProgressbar
                background={true} 
                value={amount} 
                text={`${amount}%`} 
                maxValue={100}
                styles={buildStyles({
                    textColor: "#FF754C",
                    pathColor: "#FF754C",
                    trailColor: "#e4e4e4",
                    backgroundColor: "#fff"
                })} />
        </div>
    </div>
) 

};

export default SalesItem;