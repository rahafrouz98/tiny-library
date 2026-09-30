import { Suspense } from "react";
import BooksList from "./BooksList";

export default function Page() {
    return (
        <Suspense fallback={<p>Loading books…</p>}>
            <BooksList />
        </Suspense>
    );
}
