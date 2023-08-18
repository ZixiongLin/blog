import matter from "gray-matter"

export interface MDXData extends matter.GrayMatterFile<string>{
    content: string,
    data:{
        title: string,
        date: Date
    },
}

export interface Post extends MDXData{
    slug: string
}