import Title from "./components/Title";

   
export function useMDXComponents(components: React.ReactNode[]) {
    return { h1: Title, ...components };
}