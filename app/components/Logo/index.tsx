import Link from "next/link";

export default function Logo(){
    return (
        <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                BlogZLN
            </span>
        </Link>
    )
}