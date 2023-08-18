export default function Main({
    className,
    children
}: {
    className?: string,
    children:React.ReactNode
}){
    return (
        <main 
            className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
        </main>
    )
}