import MDXRemoteWrapper from "@/app/components/MDXRemoteWrapper";
import Title from "@/app/components/Title";
import getSortedPostsData, {getPostBySlug} from "@/app/lib/posts";
import { serialize } from "next-mdx-remote/serialize";
export default async function Page(
    { params }: { params: { slug: string,title:string }}){
    const {
        slug,
    }  = params;
    let {
        content,
        title
    } = getPostBySlug({slug});

    let mdxSource =await serialize(content)
    return (
        <>
            <Title>{title}</Title>
            <MDXRemoteWrapper {...mdxSource} />
        </>

    )
}

export async function generateStaticParams() {
    const posts = getSortedPostsData()
    return posts.map(post => {return {slug: post.slug}})
}