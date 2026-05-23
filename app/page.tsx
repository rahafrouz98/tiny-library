import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"

export default function Home() {
  return (
      <>
        <Header/>
        <main className="w-full h-full  bg-white dark:bg-black flex flex-col justify-between items-center lg:flex-row gap-6 p-5">
          <section className = "flex flex-col  items-start justify-center">
            <h1 className="text-3xl font-bold mb-4">Find your next favourite book</h1>
            <p>A cosy corner of the web where readers discover hand-picked titles across every genre, from timeless classics to hidden indie gems.</p>
            <Link href="/books" className="py-2 px-4 my-10 rounded-md border-2 border-gray-800 hover:bg-gray-800">
              BROWSE BOOKS
            </Link>
          </section>
          <Image src="/mobile-home.svg" alt=" a picture of a beach" height={400} width={400} className="block lg:hidden w-auto" />
          <Image src="/desktop-home.svg" alt=" a picture of a beach" height={627} width={627} className="hidden lg:block w-auto" />
        </main>
      </>
  );
}

