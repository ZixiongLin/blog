import Link from "next/link"
export default function CustomLink({
    href,
    children
}: {
    href: string,
    children: React.ReactNode
}){
    return (
        <Link 
            href={href}
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" 
            aria-current="page">
            {children}
        </Link>
    )
}