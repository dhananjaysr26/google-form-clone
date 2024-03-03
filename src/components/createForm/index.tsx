import React, { useEffect, useMemo } from 'react';
import { FormProvider, useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import FormFieldEditor from './FormFieldEditor';
import useCreateFormStore from '../../store/useCreateForm.store';

interface CreateFormProps { }

export interface Question {
    id?: string
    type: string;
}

interface FormData {
    questions: Question[];
}

const CreateForm: React.FC<CreateFormProps> = () => {
    const methods = useForm<FormData>({ mode: 'onChange' });
    const { handleSubmit, watch, setValue, control } = methods;
    const { isTypeChange } = useCreateFormStore()

    // const { errors, isDirty } = methods.formState;

    const questions: Question[] = watch('questions');

    console.log({ questions, isTypeChange });

    const emptyFieldObject: Question = useMemo(
        () => ({
            type: 'text',
        }),
        []
    );

    const { fields } = useFieldArray({
        control,
        name: 'questions',
    });

    const handleAddNewFormField = () => {
        console.log("=>Addinng new Form Field!", { fields })
        const currentFormFields = JSON.parse(JSON.stringify(questions));
        console.log({ currentFormFields })
        currentFormFields.push(emptyFieldObject)
        setValue('questions', currentFormFields);

    }

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log({ data });
    };

    useEffect(() => {
        if (questions && questions?.length === 0) {
            setValue('questions', [emptyFieldObject]);
        }
    }, [questions, emptyFieldObject]);

    return (
        <div className='container mx-auto h-full max-w-screen-lg mt-10 bg-black'>
            <div className='h-full bg-slate-50 relative'>
                <h1 className=' text-3xl font-semibold text-center pt-3'>Form Creation</h1>
                <FormProvider {...methods}>
                    <form className={`flex flex-col p-10 gap-5`} onSubmit={handleSubmit(onSubmit)}>
                        {fields.map((field, index: number) => {
                            return (<FormFieldEditor key={field?.id} field={field} index={index} isNew={fields.length - 1 === index} />)
                        })}
                        <div className=' flex justify-center mt-5'>
                            <button type='submit'
                                className="bg-red-500 hover:bg-red-700 w-fit text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-blue active:bg-red-800"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </FormProvider>
                <div className=' absolute right-0 bottom-16'>
                    <button className=' text-sm font-semibold px-2' onClick={handleAddNewFormField}>+Add New Question </button>
                </div>
            </div>
        </div>
    );
};

export default CreateForm;
