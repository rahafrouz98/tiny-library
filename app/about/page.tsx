import Header from "@/components/Header"
import Image from "next/image"

export default function About()
{
    return <>    
            <Header/>
            <main className="flex flex-col justify-start items-start overflow-auto">
                <section className="flex lg:flex-row justify-center max-lg:flex-col justify-start items-center gap-10 px-5">
                    <Image src="/placeholder.png" alt="this is a picture of the beach" width={1798} height={1798} className="lg:w-1/3" loading="eager"/>
                    <article> 
                            <p className="text-xs my-3">ABOUT TINY LIBRARY</p>
                            <h2 className="text-3xl my-5 font-semibold">Small shelf, big impact</h2>
                            <p className="text-base my-5">Tiny Library started as a simple idea: make it easier for curious readers to actually find books they'll love, 
                               not just scroll endless lists. Every title here is chosen with care, not algorithms.</p>
                            <div className="w-full text-center "><button className="mt-20 border border-gray-900 px-5 py-1 text-base">CONTACT US</button></div>
                    </article>
                </section>
                <section className ="flex max-lg:flex-col my-10 items-center w-full border-y border-gray-200 py-10 px-5">
                    <article className ="flex-1 p-5 border-r border-gray-400">
                        <h2 className="flex justify-start items-center gap-2 text-lg font-semibold mb-3"><Image src="/catalog-icon.svg" alt="a cataloge icon" width={32} height={32}/>Curate, not crowded</h2>
                        <p>Tiny Library keeps the catalogue intentionally small so every book feels like a recommendation.</p>
                    </article>
                    <article className ="flex-1 p-5 border-r border-gray-400">
                        <h2 className="flex justify-start items-center gap-2 text-lg font-semibold mb-3"><Image src="/earth-icon.svg" alt="a cataloge icon" width={32} height={32}/>Easy to browse</h2>
                        <p>Clear categories and simple descriptions make it quick to choose what you actually want to read next.</p>
                    </article>
                    <article className ="flex-1 p-5 ">
                        <h2 className="flex justify-start items-center gap-2 text-lg font-semibold mb-3"><Image src="/flag-icon.svg" alt="a cataloge icon" width={32} height={32}/>Readers first</h2>
                        <p>Every part of Tiny Library is designed to help you spend less time searching and more time reading.</p>
                    </article>
                </section>
                <section className="px-5">
                    <h2>Our ethos</h2>
                    <p>
                        At Tiny Library, we believe a good book shouldn' t be hard to find. Our ethos is to create a small, 
                        carefully curated space where every title earns its place on the shelf and readers can trust that 
                        anything they pick up is worth their time.
                    </p>
                    <div className="text-center">____________________________</div>
                    <p className="mt-10">
                        Instead of overwhelming you with thousands of options, Tiny Library focuses on a modest collection that
                         feels personal and approachable. We want readers to feel like they've stepped into a cosy, well-loved
                          library where someone has already done the hard work of sorting through the noise.
                    </p>
                </section>    
            </main>
           </>
    
}