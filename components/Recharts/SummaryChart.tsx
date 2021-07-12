import React, {useState} from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, LabelList } from 'recharts';
import CustomTooltip from './CustomTooltip';

type SummaryChartType = {
    name: string,
    uv: number,
    pv: number,
    ex: number
};

const SummaryCahrt = () => {

    const [tooltip, setTooltip] = useState<string>('');
    const [coordinate, setCoordinate] = useState<{x: number, y: number}>();


    const coordinateHandler = (props: any) => {
        setCoordinate({x: props.x - 22.5 , y: props.y - 30});
    };

    const amountShortner = (amount: any ) => {
        if(amount >= 1000 && amount < 1000000) return ((amount / 1000) + 'k')
                            else if (amount >= 1000000) return ((amount / 1000000) + 'm');
                            else return amount;
    };
    const data:SummaryChartType[] = [
        {
            name: 'Oct',
            uv: 5,
            pv: 6,
            ex: 0,
          },
          {
            name: 'Mar',
            uv: 3,
            pv: 4,
            ex: 0,
          },
          {
            name: 'Aug',
            uv: 2  ,
            pv: 3,
            ex: 4
          },
];


return (
    <>
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
                                tickLine={false}
                                axisLine={false}
                                tick={false}
                                height={15}
                            />
                            <YAxis  
                                tickFormatter={(tick) => amountShortner(tick)}
                                tick={{fontSize: 10}}
                                stroke="white"
                                tickCount={4}
                                axisLine={false}
                                tickLine={false} 
                                    />
                            <Bar dataKey="uv" legendType="line" fill="#A0D7E7" barSize={5} radius={5} onMouseOver={(props) => {setTooltip('uv'); coordinateHandler(props)}} />
                            <Bar dataKey="pv" fill="#FFFFFF" barSize={5} radius={5} onMouseOver={(props) => {setTooltip('pv'); coordinateHandler(props)}} />
                            <Bar dataKey="ex" fill="#FFFFFF" barSize={5} radius={5} onMouseOver={(props) => {setTooltip('ex'); coordinateHandler(props)}} />
                            <Tooltip position={coordinate} cursor={false} content={<CustomTooltip tooltip={tooltip} />} />
                            </BarChart>
                        </ResponsiveContainer>
    </>
) 

};

export default SummaryCahrt;