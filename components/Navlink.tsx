
import Link from "next/link"
import {Props} from "@/types"
import {clsx} from "clsx"

export default function Navlink({children, href, isActive, isHorizontal}:Pick<Props, "children" | "href" |"isActive" |"isHorizontal">)
{
    const liClass = clsx( "text-nowrap", 
                                {"text-selectedlink": isActive,
                                 "border-selectedlink lg:border-l max-lg:border-b":isActive && isHorizontal===undefined,
                                 "border-selectedlink border-b": isActive && isHorizontal,
                                 "black": !isActive})
    
    return <li className = {liClass}><Link href = {href}>{children}</Link></li>
}