import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
    label: string
    field: string
    placeholder?: string
    required?: boolean
    register: UseFormRegister<FieldValues>
}
const TextInput: React.FC<Props> = ({ label, register, field, placeholder, required = false }) => {
    return (
        <input
            type="text"
            {...register(field, { required })}
            placeholder={placeholder ? placeholder : `Enter ${label}`}
            className="border rounded-md p-2"
        />
    );
};

export default TextInput;
