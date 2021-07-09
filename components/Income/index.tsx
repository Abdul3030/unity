import React, {useState} from 'react';
import Link from 'next/link';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import CustomTooltip from '../Recharts/CustomTooltip';

type dataType = {
    name: string,
    uv: number,
    pv: number,
};

const data:dataType[] = [
    {
        name: 'Oct',
        uv: 50,
        pv: 60,
      },
      {
        name: 'Mar',
        uv: 30,
        pv: 40,
      },
      {
        name: 'Aug',
        uv: 10,
        pv: 20,
      },
];

const Income = () => {

    const [tooltip, setTooltip] = useState<string>('');
    
return (
    <div className="w-full shadow-md rounded-3xl p-3 bg-unity-purple">
        <div className="w-full py-5">
            <h1 className="text-xl text-white">Income</h1> 
        </div>
        <div className="w-full bg-white p-5 rounded-2xl">
        <ResponsiveContainer width="100%" height={200}>
                <BarChart
                    data={data}
                    margin={{
                        top: 25,
                        right: 30,
                        left: -25,
                        bottom: 5,
                    }}
                    >
                <XAxis 
                    dataKey="name" 
                    tick={{fontSize: 10, width: 100}}
                    axisLine={false}
                    tickLine={false}
                    />
                <YAxis  
                    tickFormatter={(tick) => {
                        if(tick >= 1000 && tick < 1000000) return ((tick / 1000) + 'K')
                        else if (tick >= 1000000) return ((tick / 1000000) + 'M');
                        else return tick;
                        }}
                    tick={{fontSize: 10}}
                    tickCount={4}
                    axisLine={false}
                    tickLine={false} 
                         />
                <Tooltip cursor={false} content={<CustomTooltip tooltip={tooltip} />}  />
                <Bar dataKey="pv" fill="#6C5DD3" onMouseOver={() => setTooltip('pv')} />
                <Bar dataKey="uv" fill="#A0D7E7" onMouseOver={() => setTooltip('uv')} />
                </BarChart>
            </ResponsiveContainer>
            <button className="w-full rounded-xl bg-black hover:bg-unity-purple py-5 font-medium  text-center text-white">
                <Link href="#" >
                    <a>
                        Withdraw Earning
                    </a>
                </Link>
            </button>
        </div>
    </div>
) 

};

export default Income;