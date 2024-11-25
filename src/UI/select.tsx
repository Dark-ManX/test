import { I_Props } from '@/types/UI.types'

const CustomSelect = ({ children, ...rest }: Partial<I_Props>) => (
    <select
        {...rest}
        className="block w-full border-solid border-black border-2"
    >
        {children}
    </select>
)

export default CustomSelect
