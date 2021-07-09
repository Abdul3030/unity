import React from 'react';


type SummaryItemProps = {
    title: string,
    amount: number | string,
    color?: string,
    icon: JSX.Element | JSX.Element[],
    collapse: boolean
};

const SummaryItem = ({title, amount, color, icon, collapse}: SummaryItemProps) => {

return (
    <div className="w-full bg-white p-7 ">
        <div className="w-full flex items-center">
            <i className={`w-6 h-6 bg-${color ? color : 'indigo'}-500 rounded-xl text-white p-1 text-xs mr-3 flex justify-center items-center`}>
                {icon}
            </i>
            <h1 className="text-unity-gray font-medium text-sm md:text-base">{title}</h1>
        </div>
        <h1 className={`text-4xl font-bold py-3 font-number md:text-5xl lg:text-4xl xl:text-5xl`}>{amount}</h1>
        <div className="w-full h-1 bg-gray-300 rounded-3xl overflow-hidden">
            <div className={`w-3/5 h-full bg-${color ? color : 'indigo'}-400`}></div>
        </div>
    </div>
) 

};

export default SummaryItem;