import React from 'react';
import { fieldProps } from '../../utils/forms';
import { useFormContext } from 'react-hook-form';

interface SelectFieldTypeProps {
    name: string
    defaultValue: string
}

const SelectFieldType: React.FC<SelectFieldTypeProps> = ({ name, defaultValue }) => {
    const { register } = useFormContext();
    const options = Object.keys(fieldProps);

    return (
        <select
            className="border border-gray-300 text-sm h-11 rounded-md focus:outline-none focus:border-blue-500"
            defaultValue={defaultValue}
            {...register(name)}
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default SelectFieldType;
