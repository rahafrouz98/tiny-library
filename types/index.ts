import type { ReactNode } from "react";
export type Props = {
    params:Promise<{
        id?:string
    }>;
    children: ReactNode;
    href:string;
    isActive:boolean;
    isHorizontal:boolean|undefined;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
    categories:string[];
}

