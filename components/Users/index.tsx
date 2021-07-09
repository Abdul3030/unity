import { useRouter } from 'next/dist/client/router';
import React from 'react';
import UserItem from './UserItem';

type Item = {
    new_user: number,
    percent: number,
}

const User = () => {

    const router = useRouter();
    const itemData:Item[] = [
        {
            new_user: 57000000,
            percent: 25.77
        },
        {
            new_user: 36000,
            percent: 21.77
        }
    ];

return (
    <div className="w-full shadow-md rounded-lg px-5 my-5 md:py-0">
        <div className="w-full">
            <h1 className="text-xl">Users</h1> 
        </div>
        <div className="w-full">
            <div className="w-full divide-y">
            {
                itemData.map((item, idx) => <UserItem key={idx} userNumber={item.new_user} percent={item.percent} />)
            }    
            </div>  
            <div className="text-center">
                <button onClick={() => router.push('/')} className="text-purple-500 py-5">Go to setting</button>
            </div>
        </div>
    </div>
) 

};

export default User;