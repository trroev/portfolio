import { UseFormRegister } from "react-hook-form";

interface FormFieldProps {
  label: string;
  id: string;
  register: UseFormRegister<any>;
  placeholder: string;
  error: string | undefined;
  type?: "text" | "textarea";
  rows?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  register,
  placeholder,
  error,
  type = "text",
  rows = 4,
}) => {
  const fieldProps = {
    id: id,
    ...register(id),
    placeholder: placeholder,
    className:
      "flex w-full rounded-md border border-gray-400 px-3 py-2 mb-2 text-sm",
  };
  return (
    <div className="grid w-full max-w-xl items-center gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea {...fieldProps} rows={rows} />
      ) : (
        <input type={type} {...fieldProps} />
      )}
      {error && (
        <p className="text-red-400 text-xs mt-1 mb-2 sm:text-sm">
          {error}
        </p>
      )}
    </div>
  );
};

export { FormField };
