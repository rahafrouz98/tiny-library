import data from "@/data.json";
import BookDetail from "./BookDetail";

export function generateStaticParams() {
    return data.map((book) => ({
        id: String(book.id),
    }));
}

export default function Page() {
    return <BookDetail />;
}
