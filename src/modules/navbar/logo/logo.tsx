import { GithubOutlined } from "@ant-design/icons"

interface Props {
    brand: string
}
const Logo = ({ brand }: Props) => {

    return (
        <div className="flex justify-center items-center gap-4">
            <GithubOutlined style={{ fontSize: "25px" }} />
            <span>{brand}</span>
        </div>
    )

}

export default Logo