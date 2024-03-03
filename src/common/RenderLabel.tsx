interface props {
    label: string;
    required?: boolean;
}
const RenderLabel: React.FC<props> = ({ label, required }) => {
    return (
        <label
            className={`text-sm text-center font-normal w-32 ${label === "or" ? " mt-[0.8rem]" : ""
                } `}
            htmlFor={label}
        >
            {label}
            {required && label !== "or" && label !== undefined ? (
                <span className="text-lg text-red-600"> *</span>
            ) : null}
        </label>
    );
};

export default RenderLabel;
