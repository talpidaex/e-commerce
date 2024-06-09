import { Space } from "antd"
import Search from "antd/es/input/Search"
import type { SearchProps } from 'antd/es/input/Search';
const Searchbar = () => {

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info, value);

    return (
        <Space>
            <Search placeholder="Search Products" allowClear onSearch={onSearch}></Search>
        </Space>
    )
}

export default Searchbar