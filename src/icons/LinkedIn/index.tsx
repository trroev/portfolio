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
    <path d="M12.001 9.55c.917-.937 2.111-1.55 3.5-1.55a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 1 0-7 0V21h-2V8.5h2v1.05Zm-7-3.05a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-1 2h2V21h-2V8.5Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export { Memo as LinkedInIcon }
