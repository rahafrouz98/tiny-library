"use client";
import Navlink from "@/components/Navlink";
import { useSearchParams } from "next/navigation";
import type { Props } from "@/types";

export default function CategoryNav({ categories }: Pick<Props, "categories">) {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category") || "all";

    const navlinks = categories.map((category: string) => (
        <Navlink
            key={category}
            isHorizontal={false}
            href={`/books?category=${encodeURIComponent(category)}`}
            isActive={categoryParam === category}
        >
            {category.toUpperCase()}
        </Navlink>
    ));

    return (
        <nav className="lg:pr-20 max-lg:w-full">
            <ul className="flex flex-row justify-start lg:flex-col lg:justify-center items-start gap-4 overflow-x-auto w-full custom-scrollbar">
                {navlinks}
            </ul>
        </nav>
    );
}
