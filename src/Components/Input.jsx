const Input = (props) => {
    const { label = props.name } = props;
    return (
        <>
        <label htmlFor={props.name} className="mr-4 flex items-center mt-4 ml-9">{label}{props.required && "*"}</label>
        <input {...props} className="rounded-full px-10 py-2 ml-10 bg-neutral-300 mt-2" />
        </>
    );
};

export default Input;