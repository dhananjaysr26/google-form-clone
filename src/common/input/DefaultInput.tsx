import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
    type: string
    label: string
    field: string
    placeholder?: string
    required?: boolean
    register: UseFormRegister<FieldValues>
}

const DefaultInput: React.FC<Props> = ({ type, register, field, placeholder, required = false }) => {
    return (
        <input
            type={type}
            {...register(field, { required })}
            placeholder={placeholder}
            className="border rounded-md p-2"
        />
    );
};

export default DefaultInput;
