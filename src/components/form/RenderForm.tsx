import React from 'react';
import RenderLabel from '../../common/RenderLabel';
import RenderFormWidget from '../../common/RenderWigets';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

interface RenderFormProps {
    formFields: any[]
}

const RenderForm: React.FC<RenderFormProps> = ({ formFields }) => {
    const methods = useForm<FormData>({ mode: 'onChange' });
    const { handleSubmit, watch } = methods;
    console.log(watch())

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log({ data });
    };

    return (
        <FormProvider {...methods}>
            <form className={`flex flex-col p-10 gap-5`} onSubmit={handleSubmit(onSubmit)}>
                {formFields.map((field, index) => {
                    const { label, extraOptions } = field
                    return (
                        <div key={`form-${index}`} className=' flex items-center justify-start max-w-[500px] mx-auto'>
                            <RenderLabel label={label} required={extraOptions?.required} />
                            <RenderFormWidget widget={field} />
                        </div>
                    )
                })}
                <div className=' flex justify-center mt-5'>
                    <button type='submit'
                        className="bg-red-500 hover:bg-red-700 w-fit text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-blue active:bg-red-800"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </FormProvider>
    );
};

export default RenderForm;
