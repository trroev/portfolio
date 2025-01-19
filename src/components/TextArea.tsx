interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string
  name: string
  label: string
  placeholder: string
  type?: string
  error?: boolean
  errorMessage?: string
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
      <label htmlFor={id} className="py-2 text-sm uppercase">
        {label}
        <span className="px-1 text-red-400">*</span>
      </label>
      <textarea
        {...props}
        className="rounded-lg border border-gray-400 p-3"
        rows={10}
        id={id}
        name={name}
        placeholder={placeholder}
      ></textarea>
      {error && (
        <p className="mt-2 text-sm uppercase text-red-400">{errorMessage}</p>
      )}
    </div>
  )
}
