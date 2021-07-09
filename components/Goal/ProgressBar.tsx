

type ProgressProps = {
    title: string,
    percent: number,
    color?: string,
};

const ProgressBar = ({title, percent, color}: ProgressProps) => {

    return (
        <div className="w-full">
            <div className="w-full flex justify-between text-sm py-2">
                <h3 className="font-medium tracking-wide">{title}</h3>
                <h3 className="font-number">{percent}%</h3>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-md overflow-hidden">
                <div className={`progress w-3/4 h-full bg-${color ? color : 'green'}-400`} style={{width: `${percent}%`}}></div>
            </div>
        </div>
    )
};

export default ProgressBar;