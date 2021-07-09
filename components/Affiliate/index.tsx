import { useState } from 'react';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import CustomTooltip from '../Recharts/CustomTooltip';

type dataType = {
    name: string,
    uv: number,
    pv: number
}

const data:dataType[] = [
    {
        name: 'Graphics',
        uv: 85000,
        pv: 99000,
      },
      {
        name: 'Theme',
        uv: 55000,
        pv: 65000,
      },
      {
        name: 'Template',
        uv: 30000,
        pv: 35000,
      },
];


const Affiliate = () => {
    
    const [tooltip, setTooltip] = useState<string>('');
    
    return (
        <div className="w-full p-5 shadow-md rounded-2xl">
            <h1 className="w-full font-medium py-2">Affiliate Impressions</h1>
            <div className="w-full h-64">
                <ResponsiveContainer width="100%" height={250}>
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
                        tickLine={false}
                        axisLine={false} />
                    <YAxis  
                    tickFormatter={(tick) => {
                        if(tick >= 1000 && tick < 1000000) return ((tick / 1000) + 'K')
                        else if (tick >= 1000000) return ((tick / 1000000) + 'M');
                        else return tick;
                        }}
                    tick={{fontSize: 10}}
                    axisLine={false}
                    tickLine={false}
                         />
                    <Tooltip cursor={false} content={<CustomTooltip tooltip={tooltip} />}  />
                    <Bar dataKey="pv" fill="#6C5DD3" onMouseOver={() => setTooltip('pv')} />
                    <Bar dataKey="uv" fill="#A0D7E7" onMouseOver={() => setTooltip('uv')} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
};


export default Affiliate;