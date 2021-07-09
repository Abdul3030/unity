import React from 'react';
import Image from 'next/image';
import ProgressBar from './ProgressBar';


const  Goal = () => {
  return (
    <div className="w-full p-5 shadow-md rounded-lg">
        <h1 className="text-normal font-medium py-2">2020 Goal</h1>
        <div className="relative w-full h-52">
            <div className="w-full h-full flex">
                <div className="w-1/2 rounded-lg h-full"></div>
                <div className="w-1/2 rounded-lg h-full bg-blue-300"></div>
            </div>
            <div className="absolute top-0 w-full h-full flex justify-center items-center">
                <Image src="/goal.png" width="192" height="192" alt="Goal Image"/>
            </div>
            <div className="absolute top-0 left-3 flex justify-center items-center w-10">
                <div className="w-5 h-5 rounded-full shadow-md flex justify-center items-center">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clipRule="evenodd"></path></svg>
                </div>
                <div className="w-5 h-5 rounded-full ml-5 shadow-md flex justify-center items-center">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clipRule="evenodd"></path></svg>
                </div>
            </div>
        </div>
        <div className="w-full">
            <ProgressBar title="Bento Illustration" percent={50} color="indigo" />
            <ProgressBar title="Bento Illustration" percent={70} color="green" />
            <ProgressBar title="Bento Illustration" percent={40} color="purple" />
            <ProgressBar title="Bento Illustration" percent={90} color="red" />
        </div>
    </div>
  );
}

export default Goal;


