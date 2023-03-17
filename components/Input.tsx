interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  error?: boolean;
  errorMessage?: string;
}

export const Input = ({
  id,
  name,
  label,
  placeholder,
  error = false,
  errorMessage = "",
  ...props
}: InputProps) => {
  return (
    <>
      <label htmlFor={id} className="uppercase text-sm py-2">
        {label}
        {(label === "Name" || label === "Email") && (
          <span className="text-red-400 px-1">*</span>
        )}
      </label>
      <input
        {...props}
        className="border rounded-lg p-3 flex border-gray-400"
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
      />
      {error && (
        <p className="text-red-400 uppercase text-sm mt-2">
          {errorMessage}
        </p>
      )}
    </>
  );
};
