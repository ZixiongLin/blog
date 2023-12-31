import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from "next-mdx-remote/serialize";

const postsDirectory = path.join(process.cwd(), 'posts');

export default function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents) ;
    // Combine the data with the id
    let post = {
      ...matterResult,
      date: matterResult.data.date,
      slug: id,
      title: id.replaceAll('-', ' ')
    }
    return post;
  });
  return allPostsData.sort((a, b) =>{
    if (a.date! < b.date) {
      return 1;
    } else {
      return -1;
    }
  })
}

export function getPostBySlug({slug}:{slug:string}) {
  const posts = getSortedPostsData()
  const postFinded =posts.find((post) => post.slug === slug)

  if(postFinded) return {
    ...postFinded,
  }
  throw Error('Post not found')
}


