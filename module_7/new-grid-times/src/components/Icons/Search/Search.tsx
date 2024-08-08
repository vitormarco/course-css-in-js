import { Search as SearchFI } from "react-feather"
import IIconProps from "../interfaces/IIconProps"

const Search = ({
    size,
    color,
    ...rest
}: IIconProps) => {
    return <SearchFI size={size} color={color} {...rest} />
}

export default Search