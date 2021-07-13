import React from 'react';

type CustomTooltipProps = {
    active?: boolean,
    payload?: any[] | undefined,
    tooltip: string,
}


const CustomTooltip = ({active, payload, tooltip}: CustomTooltipProps) => {

if(!tooltip || !active) return <></>;
const bar:any | undefined = payload?.filter((item:any) => item.dataKey === tooltip);

return (
    <div className="relative rounded-lg flex justify-center text-center bg-black text-white text-xs px-5 py-1 ">
        {
            bar[0]?.value
        }
        <div className="absolute indicator  transform -rotate-45"></div>
        <style jsx>{`  
            .indicator {
                border: 3px solid;
                border-color: transparent transparent black black;
                left: 50% - 3px;
                bottom: -3px;
            }
        `}</style>
    </div>
) 

};

export default CustomTooltip;