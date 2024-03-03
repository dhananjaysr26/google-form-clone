import React from 'react';
import RenderForm from './RenderForm';

interface FormProps {

}

const Form: React.FC<FormProps> = () => {
    const formFields = [
        {
            type: "text",
            label: "Name",
            extraOptions: {
                placeholder: "Enter Your Name",
                minLength: "5",
                maxLength: "100",
                required: "",
                regex: ""
            }
        },
        {
            type: "number",
            label: "Height",
            extraOptions: {
                placeholder: "Enter Height",
                min: "100",
                max: "200",
                required: ""
            }
        },
        {
            type: "text",
            label: "City",
            extraOptions: {
                placeholder: "Enter Your City",
                minLength: "5",
                maxLength: "50",
                required: "",
                regex: ""
            }
        }
    ]
    return (
        <div className='container mx-auto h-full max-w-screen-lg bg-black'>
            <div className='h-full bg-slate-50 relative text-center py-2'>
                <h1 className=' text-3xl font-semibold text-center pt-3'>Form Build By DJ!</h1>
                <p className=' pt-4 max-w-[600px] mx-auto'>This is Form Description</p>
                <div>
                    <RenderForm formFields={formFields} />
                </div>
            </div>
        </div>
    );
};

export default Form;
