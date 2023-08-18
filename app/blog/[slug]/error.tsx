'use client';

export default function Error({
    error,
    reset
}:{
    error:Error,
    reset: () => void
}){
    return(
        <h1>
            Ups! hubo un error
        </h1>
    )
}