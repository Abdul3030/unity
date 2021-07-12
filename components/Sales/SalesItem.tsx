import React from 'react';
import Image from 'next/image';

type SalesItemProps = {
    name: string,
    subname: string,
    amount: number,
    collapse: boolean,
    index: number
};

const SalesItem = ({name, subname, amount, collapse, index}: SalesItemProps) => {

    const randomColor = () => {
        const color = ['#6C5DD3', '#7FBA7A', '#FFA2C0', '#FF754C',];
        return color[index];
    };

    const randomImage = () => {
        const images = [ '/feature2.png', '/feature3.png', '/goal.png',];
        return images[index];
    };

return (
    <div className="w-full flex justify-between py-3 ">
        <div className={`w-12 h-12 ${!collapse ? 'md:w-10 md:h-10' : 'md:w-12 md:h-10'}  flex justify-center items-center rounded-lg`} style={{backgroundColor: randomColor()+'33'}}>
            <Image src={(randomImage())} width="48" height="48" alt="Feature Image" />
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