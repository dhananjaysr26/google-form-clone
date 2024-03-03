import React from 'react';
import { BiSearch } from 'react-icons/bi';

interface SearchBoxProps {
}

const SearchBox: React.FC<SearchBoxProps> = () => {
    return (
        <div className=' p-2 w-1/2 max-w-[550px] rounded bg-slate-100 shadow hidden md:block'>
            <div className='h-8 w-full gap-0.5 flex items-center'>
                <BiSearch size={24} />
                <input
                    type="text"
                    placeholder='Search Forms'
                    className='w-full outline-none h-full px-2 border-none bg-slate-100'
                />
            </div>
        </div>
    );
};

export default SearchBox;
