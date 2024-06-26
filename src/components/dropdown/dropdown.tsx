import { CaretUpOutlined } from "@ant-design/icons"
import React, { useState } from "react"

interface Props {
    label: string,
    rotate: number
}

const Dropdown = ({ label, rotate }: Props) => {
    const [isOpen, setOpen] = useState()
    return (
        <div className="dropdown-container flex items-center gap-5">
            {label}
            <CaretUpOutlined rotate={rotate} />
        </div>
    )
}

export default Dropdown