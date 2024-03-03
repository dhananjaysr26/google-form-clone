import React from "react";
import TextInput from "./input/TextInput";
import NumberInput from "./input/NumberInput";
import DefaultInput from "./input/DefaultInput";
import { useFormContext } from "react-hook-form";

interface FormWidgetsProps {
    widget: any;
}

const RenderFormWidget: React.FC<FormWidgetsProps> = ({ widget }) => {
    const { register } = useFormContext();
    const { label, type, extraOptions } = widget
    const { required } = extraOptions

    switch (type) {
        case "text":
            return (
                <TextInput
                    required={required}
                    label={label}
                    field={label}
                    register={register}
                />
            )
        case "number":
            return (
                <NumberInput
                    required={required}
                    label={label}
                    field={label}
                    register={register}
                />
            )
        default:
            return (
                <DefaultInput
                    type={type}
                    required={required}
                    label={label}
                    field={label}
                    register={register}
                />
            );
    }
};

export default RenderFormWidget;
