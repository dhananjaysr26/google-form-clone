import React from 'react';
import { fieldProps } from '../../utils/forms';

interface SelectFieldTypeProps {
    handleOnClickOption: (selectedOption: string) => void;
    defaultValue: string
}

const SelectFieldType: React.FC<SelectFieldTypeProps> = ({ handleOnClickOption, defaultValue }) => {
    const options = Object.keys(fieldProps);

    return (
        <select
            className="border border-gray-300 text-sm h-11 rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e) => handleOnClickOption(e.target.value)}
            defaultValue={defaultValue}
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
