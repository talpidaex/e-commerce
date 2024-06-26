'use client'
import { Dropdown, Menu } from "antd"
import type { MenuProps } from "antd"
import Link from "next/link"
import Logo from "./logo/logo"
import Searchbar from "./searchbar/searchbar"
import SocialIconGroup from "./social-icon-group/social-icon-group"
import { MenuOutlined, MenuUnfoldOutlined } from "@ant-design/icons"

type MenuItem = Required<MenuProps>['items']

const menuItems: MenuItem = [
    {
        key: "about-us",
        label: <Link href="about-us">About Us</Link>
    },
    {
        key: "blog",
        label: <Link href="blog">Blog</Link>
    },
    {
        key: "contact-us",
        label: <Link href="contact-us">Contact Us</Link>
    },
    {
        key: "help-support",
        label: <Link href="contact-us">Help & Support</Link>
    }
]

const dropdownMenuItems: MenuProps['items'] = [
    {
        key: "USD",
        label: <span>USD</span>
    }, {
        key: "TL",
        label: <span>TL</span>
    }]
const Navbar = () => {
    return (
        <>
            <div className="sm:block lg:flex w-full justify-center p-8">
                <div className="flex justify-between w-full items-center">
                    <Logo brand={"E-Commerce"} className="order-2 sm:order-none" />
                    <MenuOutlined className="block sm:hidden order-1" />
                    <Searchbar className="hidden md:block" />
                </div>
                <div className="hidden md:flex md:justify-between lg:justify-center w-full items-center">
                    <Menu style={{ borderBottom: "none", width: "420px" }} items={menuItems} mode="horizontal" />
                    <SocialIconGroup />
                </div>
            </div>
            <div className="w-full hidden sm:flex bg-black text-white ">
                <div>
                    <MenuUnfoldOutlined />
                    <span>Categories</span>
                </div>
                <div>
                    <Dropdown menu={{ dropdownMenuItems }}>

                    </Dropdown>
                </div>
            </div>
        </>
    )
}

export default Navbar