import * as Ionic from 'react-icons/io5';
import Link from 'next/link';

type ItemProps = {
    icon: keyof typeof Ionic ,
    name: string,
    badge?: number | undefined,
    show: boolean,
    url: string,
    clicked: () => void,
};

const Item = ({icon, name, badge, show, url, clicked}:ItemProps) => {

    const Icon = Ionic[icon];

    return (
        <Link  href={url} passHref>
            <div onClick={clicked} className="relative w-full font-medium cursor-pointer transition-all duration-400 ease-in-out flex justify-between items-center rounded-xl px-5 py-3 text-unity-gray hover:bg-unity-purple hover:text-white">
                <div className={`flex ${show ? 'justify-between' : 'justify-between'}`}>
                    <i className="text-lg flex items-center"><Icon /></i>
                    {
                        show && <h2 className="pl-5">{name}</h2>
                    }
                </div>
                {
                    badge! >= 0 && (<>
                            <div className={`rounded-full flex justify-center items-center bg-unity-orange ${!show ? 'absolute top-1 right-2 w-4 h-4' : 'w-5 h-5'}`}>
                                <span className="p-2 text-xs text-white">{badge}</span>
                            </div>
                        </>)
                }
            </div>
        </Link>
    );
};

export default Item;