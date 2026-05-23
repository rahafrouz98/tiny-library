"use client"
import Navlink from "@/components/Navlink"
import {usePathname} from "next/navigation"

export default function HeaderNav()
{
    const path = usePathname()

    return <nav>
                <ul className= "flex flex-row justify-center items-start gap-4">
                    <Navlink href="/books?category=all" isActive={path==="/books"} isHorizontal={true}>BOOKS</Navlink>
                    <Navlink href="/about" isActive={path==="/about"} isHorizontal={true}>ABOUT</Navlink>
                </ul>
            </nav>
}