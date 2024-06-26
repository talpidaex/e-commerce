import { Space } from "antd"
import Search from "antd/es/input/Search"
import type { SearchProps } from 'antd/es/input/Search';
interface Props {
    className: string
}
const Searchbar = ({ className }: Props) => {

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info, value);

    return (
        <Space className={className}>
            <Search placeholder="Search Products" allowClear onSearch={onSearch}></Search>
        </Space>
    )
}

export default Searchbar