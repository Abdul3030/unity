import * as Ionic from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { useContext } from 'react';
import { CollapseContext } from '../../context/CollapseContext';

type ItemProps = {
    icon: keyof typeof Ionic ,
    name: string,
    badge?: number | undefined,
    url: string,
};

const Item = ({icon, name, badge, url}:ItemProps) => {

    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1023}, undefined, (match) => match ? setCollapse(true) : setCollapse(false));

    const Icon = Ionic[icon];

    const [collapse, setCollapse] = useContext<any>(CollapseContext);

    return (
        <Link  href={url} passHref>
            <div onClick={() => isTablet ? setCollapse(true) : ''} className="relative w-full font-medium cursor-pointer transition-all duration-400 ease-in-out flex justify-between items-center rounded-xl px-5 py-3 text-unity-gray hover:bg-unity-purple hover:text-white">
                <div className={`flex ${collapse ? 'justify-between' : 'justify-between'}`}>
                    <i className="text-lg flex items-center"><Icon /></i>
                    {
                        !collapse && <h2 className="pl-5">{name}</h2>
                    }
                </div>
                {
                    badge! >= 0 && (<>
                            <div className={`rounded-full flex justify-center items-center bg-unity-orange ${collapse ? 'absolute top-1 right-2 w-4 h-4' : 'w-5 h-5'}`}>
                                <span className="p-2 text-xs text-white">{badge}</span>
                            </div>
                        </>)
                }
            </div>
        </Link>
    );
};

export default Item;