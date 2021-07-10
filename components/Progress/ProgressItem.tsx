import React from 'react';
import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

type SalesItemProps = {
    name: string,
    subname: string,
    amount: number,
    collapse: boolean,
    index: number
};

const SalesItem = ({name, subname, amount, collapse, index}: SalesItemProps) => {

    const randomColor = () => {
        const color = ['#6C5DD3', '#FF754C', '#7FBA7A', '#FFA2C0'];
        return color[index];
    };

    const randomImage = () => {
        const images = ['/goal.png', '/feature2.png', '/feature3.png'];
        return images[index];
    };

return (
    <div className="w-full flex justify-between py-3 ">
        <div className={`w-12 h-12 ${!collapse ? 'md:w-10 md:h-10' : 'md:w-12 md:h-10'} flex justify-center items-center rounded-lg py-2 bg-opacity-10`} style={{backgroundColor: randomColor()+'44'}}>
            <Image src={randomImage()} width="48" height="48" alt="Feature Image" />
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
                    textColor: randomColor(),
                    pathColor: randomColor(),
                    trailColor: "#e4e4e4",
                    backgroundColor: "#fff"
                })} />
        </div>
    </div>
) 

};

export default SalesItem;