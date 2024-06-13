'use client'
import Container from "@/components/container/container"
import { Menu } from "antd"
import type { MenuProps } from "antd"
import Link from "next/link"
import Logo from "./logo/logo"
import Searchbar from "./searchbar/searchbar"
import SocialIconGroup from "./social-icon-group/social-icon-group"

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

const Navbar = () => {
    return (
        <>
            <div className="sm:block lg:flex w-full justify-center p-8">
                <div className="flex justify-between w-full">
                    <Logo brand={"E-Commerce"} />
                    <Searchbar />
                </div>
                <div className="flex md:justify-between lg:justify-center w-full items-center">
                    <Menu style={{ borderBottom: "none", width: "420px" }} items={menuItems} mode="horizontal" />
                    <SocialIconGroup />
                </div>
            </div>
        </>
    )
}

export default Navbar