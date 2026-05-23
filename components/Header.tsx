import Image from "next/image"
import Link from "next/link"
import HeaderNav from "./HeaderNav"

export default function Header()
{
    return  <header className="w-full h-[100px] lg:h-[130px] flex justify-between items-end p-5">
                <Link href="/"><Image src="/logo.png" alt="logo of the page" width={148} height={133} className="h-full max-h-[60px] lg:max-h-[90px] w-auto" loading="eager"/></Link>
                <HeaderNav/>
            </header>
}

