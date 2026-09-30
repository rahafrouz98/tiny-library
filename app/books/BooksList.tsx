"use client";

import { useSearchParams } from "next/navigation";
import CategoryNav from "@/components/CategoryNav";
import type { Props } from "@/types";
import data from "@/data.json";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function BooksList() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category") || "all";

    const categories = ["all", ...new Set(data.map((book) => book.category))];

    const filteredData = category === "all" ? data : data.filter((book) => book.category === category);
    const bookContainer = filteredData.map((book) => (
        <Link href={`books/${book.id}`} key={book.id}>
            <article className="max-w-67">
                <Image
                    src="/placeholder.png"
                    alt="the cover picture of the book"
                    width={1798}
                    height={1798}
                    loading="lazy"
                    className="w-full"
                />
                <h2>{book.name}</h2>
                <p>{book.author}</p>
                <p>{book.category}</p>
                <div>
                    <Image src="/heart.svg" alt="the like icon" width={23} height={20} />
                    <span>{book.likes}</span>
                </div>
            </article>
        </Link>
    ));

    return (
        <>
            <Header />
            <main className="flex flex-col justify-center items-center  lg:flex-row gap-6 overflow-hidden p-5">
                <CategoryNav categories={categories} />
                <section className="flex-1 flex flex-col lg:flex-row lg:flex-wrap justify-srart items-start overflow-auto gap-5 h-4/5">
                    {bookContainer}
                </section>
            </main>
        </>
    );
}
