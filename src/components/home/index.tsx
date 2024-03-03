import React from 'react';
import { FaListUl } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    const templates = [
        {
            name: "Blank Form",
            imageUrl: ""
        },
        {
            name: "Blank Form",
            imageUrl: ""
        },
        {
            name: "Blank Form",
            imageUrl: ""
        },
    ]

    return (
        <div className=' h-screen '>
            <div className='bg-slate-50 border h-[250px]'>
                <div className='container mx-auto h-full py-4'>
                    <h2>Start a new Form</h2>
                    <div className=' pt-4 flex w-full h-[calc(100%-32px)] gap-4 '>
                        {
                            templates.map(c => {
                                return <Link to={"/create-form"}><div className=' h-full w-[200px] bg-black/20 rounded flex items-center justify-center cursor-pointer hover:border-2 hover:border-red-400'>
                                    <h2>{c?.name}</h2>
                                </div></Link>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='bg-slate-50 border h-[calc(100%-314px)]'>
                <div className='container mx-auto h-full py-4'>
                    <div className=' w-full flex items-center py-4 justify-between'>
                        <h2>Recent Forms</h2>
                        <FaListUl size={20} />
                    </div>
                    <div className=' pt-2 flex w-full h-[200px] gap-4'>
                        {
                            templates.map(c => {
                                return <div className=' h-full w-[200px] bg-black/20 rounded flex items-center justify-center cursor-pointer hover:border-2 hover:border-red-400'>
                                    <h2>{c?.name}</h2>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
