import { X as XFI } from 'react-feather'
import IIconProps from "../interfaces/IIconProps";

const X = ({
    size,
    color,
    ...rest
}: IIconProps) => {
    return <XFI size={size} color={color} { ...rest }/>
}

export default X;