const Input = (props) => {
  const { label = props.name } = props;

  return (
    <div className="flex flex-col items-center w-full">
      <label
        htmlFor={props.name}
        className="text-sm mt-4 mb-1 text-center w-full max-w-md  md:text-3xl"
      >
        {label}
        {props.required && "*"}
      </label>
      <input
        {...props}
        className="rounded-full px-6 py-2 bg-neutral-300 md:py-3 md:text-5xl "
      />
    </div>
  );
};

export default Input;
