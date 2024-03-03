import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Question } from '.';
import { fieldProps } from '../../utils/forms';
import SelectFieldType from './SelectFieldType';

interface FormFieldEditorProps {
    field: Question;
    index: number
    isNew?: boolean
}

const FormFieldEditor: React.FC<FormFieldEditorProps> = ({ field, index, isNew = false }) => {
    const { register } = useFormContext();
    const [showExtraOptions, setShowExtraOptions] = useState(false)

    const renderExtraOptions = () => {
        const extraFields = fieldProps[field?.type]?.extraOptions;
        return extraFields
            ? Object.entries(extraFields).map(([key, type]: any) => (
                <input
                    key={key}
                    type={type}
                    {...register(`questions.${index}.extraOptions.${key}`)}
                    placeholder={`Enter ${key}`}
                    className="border w-full md:w-auto border-gray-300 p-2 rounded-md mt-2 focus:outline-none focus:border-blue-500"

                />
            ))
            : null;
    };

    const renderFieldInputs = () => {
        const fieldPropKeys = Object.keys(fieldProps[field?.type]);

        return fieldPropKeys.map((key) => {
            if (key === 'extraOptions') {
                return (
                    <div className='flex flex-col w-full' key={key}>
                        <button
                            className=' text-xs md:text-sm'
                            onClick={() => setShowExtraOptions(pre => !pre)}
                        >
                            {showExtraOptions ? "Hide Extra Options" : "Show Extra Options"}
                        </button>
                        {showExtraOptions && <div key={key} className=' bg-slate-50 px-2 py-2 gap-3 flex flex-wrap'>{renderExtraOptions()}</div>}
                    </div>
                )
            }
            const type = fieldProps[field?.type][key];
            // console.log('KEY', { key });
            return (
                <input
                    key={key}
                    type={type}
                    {...register(`questions.${index}.${key}` as const)}
                    placeholder={`Enter ${key}`}
                    className="border w-full md:w-auto border-gray-300 p-2 rounded-md mt-2 focus:outline-none focus:border-blue-500"
                />
            );
        });
    };

    return (
        <div className={`flex flex-col py-5 pt-7 bg-white px-3 shadow rounded relative ${isNew ? "slide-me-down" : ""}`}>
            <div className=' absolute bg-gray-200 h-8 rounded-full rounded-t-none w-8 left-1/2 -translate-x-1/2 -top-1 flex justify-center items-center text-xs'>
                <h2 className=' text-gray-500'>Q{index + 1}</h2>
            </div>
            <div className=' flex justify-between gap-x-5 items-center'>
                <h3 className="capitalize text-base md:text-lg p-2 border rounded my-2 w-full">{field?.type} Field</h3>
                <SelectFieldType name={`questions.${index}.type`} defaultValue={field?.type} />
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-2">{renderFieldInputs()}</div>
        </div>
    );
};

export default FormFieldEditor;
