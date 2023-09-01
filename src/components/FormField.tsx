import { UseFormRegister } from "react-hook-form";

interface FormFieldProps {
  label: string;
  id: string;
  register: UseFormRegister<any>;
  placeholder: string;
  error: string | undefined;
  type?: "text" | "textarea";
  rows?: number;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  register,
  placeholder,
  error,
  type = "text",
  rows = 4,
  required,
}) => {
  const fieldProps = {
    id: id,
    ...register(id),
    placeholder: placeholder,
    className:
      "flex min-h-10 w-full rounded-md bg-slate-950 border border-slate-50/25 px-3 py-2 text-sm",
  };
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-medium leading-nonepeer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
        {required && <span className="text-red-400">*</span>}
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
