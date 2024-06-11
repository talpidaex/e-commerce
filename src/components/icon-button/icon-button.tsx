import react from "react"

interface Props {
    icon: React.ReactNode,
    handleClick: React.MouseEventHandler<HTMLDivElement>
}
const IconButton = ({ icon, handleClick }: Props) => {
    return (
        <div className="cursor-pointer" onClick={handleClick}>
            {icon}
        </div>
    )
}

export default IconButton