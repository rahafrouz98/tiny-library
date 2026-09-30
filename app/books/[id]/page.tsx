"use client";
import type { Props } from "@/types";
import data from "@/data.json";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function BookDetail() {
    const router = useRouter();
    const { id } = useParams();
    const [liked, setLiked] = useState(false);

    const book = data.find((book) => book.id === Number(id));

    return (
        <main className="h-screen flex flex-col justify-around items-center w-full gap-20 overflow-hidden p-5">
            <div className="w-screen text-center ">
                <button onClick={() => router.back()}>BACK TO OVERVIEW</button>
            </div>
            <section className="flex max-lg:flex-col justify-center max-lg:justify-start gap-10 items-center w-full max-lg:overflow-auto min-h-0 max-h-3/4">
                <Image
                    src="/placeholder.png"
                    alt="the cover picture of the book"
                    width={1798}
                    height={1798}
                    loading="lazy"
                    className="lg:h-full w-auto"
                ></Image>
                <article className="flex flex-col justify-start items-start gap-3 lg:overflow-auto w-1/2 max-lg:w-full  lg:h-full">
                    <div>
                        <button
                            type="button"
                            onClick={() => setLiked((previous) => !previous)}
                            aria-label={liked ? "Unlike this book" : "Like this book"}
                            aria-pressed={liked}
                            className="hover:cursor-pointer"
                        >
                            <svg
                                width="23"
                                height="20"
                                viewBox="0 0 24 24"
                                fill={liked ? "red" : "none"}
                                stroke={liked ? "red" : "currentColor"}
                                strokeWidth="2"
                                aria-hidden="true"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
                            </svg>
                        </button>
                        <span className="pb-2 pl-2 text-gray-600">{(book?.likes ?? 0) + (liked ? 1 : 0)}</span>
                    </div>
                    <h2 className="font-bold">{book?.name}</h2>
                    <p>
                        Introduction Introduction Introduction Introduction Introduction Introduction Introduction
                        Introduction Introduction Introduction Introduction Introduction Introduction Introduction
                        Introduction Introduction Introduction Introduction Introduction Introduction Introduction
                        Introduction Introduction Introduction Introduction Introduction Introduction Introduction
                        Introduction Introduction Introduction Introduction Introduction Introduction Introduction
                        Introduction Introduction Introduction Introduction Introduction Introduction Introduction
                        Introduction Introduction Introduction Introduction Introduction Introduction Introduction
                        Introduction Introduction Introduction Introduction Introduction Introduction Introduction
                        Introduction Introduction Introduction Introduction Introduction Introduction Introduction
                        Introduction Introduction Introduction Introduction Introduction Introduction Introduction
                        Introduction Introduction Introduction Introduction
                    </p>
                    <p className="border border-gray-300 inline-block px-2 rounded-xl">{book?.category}</p>
                    <p>{book?.author}</p>
                    <p>{book?.dateAdded}</p>
                </article>
            </section>
        </main>
    );
}
