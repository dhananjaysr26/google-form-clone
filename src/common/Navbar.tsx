import React from 'react';
import { IoIosMenu } from "react-icons/io";
import SearchBox from './SearchBox';


interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <div className=' h-16 bg-white shadow flex justify-between  items-center px-3 md:px-12 sticky top-0 z-10'>
            <div className=' flex items-center gap-2'>
                <IoIosMenu size={24} />
                <h1>Google Forms</h1>
            </div>
            <SearchBox />
            <div className=' h-8 w-8 bg-slate-300 flex items-center justify-center rounded-full'>
                <h2 className=' text-white'>D</h2>
            </div>
        </div>
    );
};

export default Navbar;
