
import { Menu as MenuFI } from 'react-feather'
import IIconProps from "../interfaces/IIconProps";

const Menu = ({ 
    size,
    color,
    ...rest 
}: IIconProps) => {
    return <MenuFI size={size} color={color} {...rest} />
}

export default Menu;