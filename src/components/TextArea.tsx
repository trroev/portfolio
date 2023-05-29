interface TextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  error?: boolean;
  errorMessage?: string;
}

export const TextArea = ({
  id,
  name,
  label,
  placeholder,
  error,
  errorMessage,
  ...props
}: TextAreaProps) => {
  return (
    <div className="flex flex-col py-2">
      <label htmlFor={id} className="uppercase text-sm py-2">
        {label}
        <span className=" text-red-400 px-1">*</span>
      </label>
      <textarea
        {...props}
        className="border rounded-lg p-3 border-gray-400"
        rows={10}
        id={id}
        name={name}
        placeholder={placeholder}
      ></textarea>
      {error && (
        <p className="text-red-400 uppercase text-sm mt-2">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
