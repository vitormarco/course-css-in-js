import { Facebook as FacebookFI} from 'react-feather'
import IIconProps from "../interfaces/IIconProps";

const Facebook = ({
    size,
    color,
    ...rest
}: IIconProps) => {
    return <FacebookFI size={size} color={color} { ...rest }/>
}

export default Facebook;