import React from 'react';


type UserItemProps = {
    userNumber: number,
    percent: number
};

const UserItem = ({userNumber, percent}: UserItemProps) => {

    const amountShortner = (amount: number) => {
        if(amount >= 1000 && amount < 1000000) return ((amount / 1000) + 'k')
                            else if (amount >= 1000000) return ((amount / 1000000) + 'm');
                            else return amount;
    };

return (
    <div className="w-full py-5">
        <h1 className="text-unity-gray font-medium text-sm">New Users</h1>
        <div className="w-full flex">
            <div className="w-1/2 flex flex-col justify-center">
                <h1 className="text-4xl text-number font-bold py-1">{amountShortner(userNumber)}</h1>
                <h6 className=" text-green-400 text-sm  pb-0">{percent}%</h6>
            </div>
            <div className="w-1/2 flex items-end">
                <div className="w-5 h-8 bg-blue-300 rounded "></div>
                <div className="w-5 h-16 bg-blue-800 rounded ml-1"></div>
                <div className="w-5 h-12 bg-blue-300 rounded ml-1"></div>
                <div className="w-5 h-14 bg-blue-300 rounded ml-1"></div>
                <div className="w-5 h-8 bg-blue-300 rounded ml-1"></div>
            </div>
        </div>
    </div>
) 

};

export default UserItem;