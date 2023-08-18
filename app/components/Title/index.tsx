export default function Title({
    children
}:{
    children:React.ReactNode
}){
    return (
        <h1 className={`mb-3 text-2xl font-semibold`}>
            {children}
        </h1>
    )
}