import React from 'react';
import Image from 'next/image';

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
            <h4 className="text-unity-gray text-xs font-normal">{subname}</h4>
        </div>
        <div className="font-bold text-semibold">
            <h2 className="text-unity-green">+${amount}</h2>
        </div>
    </div>
) 

};

export default SalesItem;