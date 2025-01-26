type InputProps = {
  id: string
  name: string
  label: string
  placeholder: string
  error?: boolean
  errorMessage?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  id,
  name,
  label,
  placeholder,
  error = false,
  errorMessage = '',
  ...props
}: InputProps) => {
  return (
    <>
      <label htmlFor={id} className="py-2 text-sm uppercase">
        {label}
        {(label === 'Name' || label === 'Email') && (
          <span className="px-1 text-primary">*</span>
        )}
      </label>
      <input
        {...props}
        className="flex rounded-lg border border-gray-400 p-3"
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
      />
      {error && (
        <p className="mt-2 text-destructive text-sm uppercase">
          {errorMessage}
        </p>
      )}
    </>
  )
}
