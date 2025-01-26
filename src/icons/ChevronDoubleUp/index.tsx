import { type Ref, type SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path d="m12 4.836-6.207 6.207 1.414 1.414L12 7.664l4.793 4.793 1.414-1.414L12 4.836Zm0 5.65-6.207 6.207 1.414 1.414L12 13.314l4.793 4.793 1.414-1.414L12 10.486Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export { Memo as ChevronDoubleUpIcon }
