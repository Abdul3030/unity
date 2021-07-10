import * as React from 'react';
import { useState } from 'react';


type CollapseContextType = [
    collapse: boolean,
    setCollapse: React.Dispatch<React.SetStateAction<boolean>>
]


export const CollapseContext = React.createContext<CollapseContextType | undefined>(undefined);


export const CollapseProvider = ({children}:{children: JSX.Element | JSX.Element[]}) => {

    const [collapse, setCollapse] = useState<boolean>(true);
    
    return (
        <CollapseContext.Provider value={[collapse, setCollapse]} >
            {
                children
            }
        </CollapseContext.Provider>
    )
};