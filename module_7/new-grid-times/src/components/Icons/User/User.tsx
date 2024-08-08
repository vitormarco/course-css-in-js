import { User as UserFI} from 'react-feather'
import IIconProps from "../interfaces/IIconProps";

const User = ({
    size,
    color,
    ...rest
}: IIconProps) => {
    return <UserFI size={size} color={color} { ...rest }/>
}

export default User