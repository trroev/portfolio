export const validate = ({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) => {
  const errors: {
    name?: string
    email?: string
    message?: string
  } = {}
  if (!name || name.trim() === '') {
    errors.name = 'Please provide your name'
  }
  if (!email || email.trim() === '') {
    errors.email = 'Please provide your email address'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address'
  }
  if (!message || message.trim() === '') {
    errors.message = 'Please provide a message'
  }
  return errors
}
