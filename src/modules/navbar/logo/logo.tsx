import { GithubOutlined } from "@ant-design/icons"

interface Props {
    brand: string
}
const Logo = ({ brand }: Props) => {

    return (
        <div className="flex justify-center items-center">
            <GithubOutlined style={{ fontSize: "25px", marginRight: 10 }} />
            <span>{brand}</span>
        </div>
    )

}

export default Logo