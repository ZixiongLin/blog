import Link from "next/link";
import CustomLink from "../Link";
import Logo from "../Logo";

export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Logo></Logo>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <CustomLink href="/blog">
                                Blog
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink href="/about">
                                About
                            </CustomLink>
                        </li>
                    </ul>
                </div>

                <div className="flex md:order-2">
                    <Link 
                        href="https://zlinyan.es"
                        type="button" 
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Portfolio
                    </Link>
                </div>
            </div>
        </nav>
    )
}