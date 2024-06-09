'use client'
import Container from "@/components/container/container"
import { Menu } from "antd"
import type { MenuProps } from "antd"
import Link from "next/link"
import Logo from "./logo/logo"
import Searchbar from "./searchbar/searchbar"

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
            <Container>
                <Logo brand={"E-Commerce"} />
                <Searchbar />
                <Menu style={{ borderBottom: "none" }} items={menuItems} mode="horizontal" />
            </Container>
        </>
    )
}

export default Navbar