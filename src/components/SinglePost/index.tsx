import { findPostBySlugCached } from "@/src/lib/Posts/queries"
import PostCoverImage from "../PostCoverImage"
import PostTitle from "../PostTitle"
import Image from "next/image"
import SafeMarkdown from "../SafeMarkdow"

type SinglePostProps={
    slug:string
}
export default async function SinglePost({slug}:SinglePostProps){
    const post = await findPostBySlugCached(slug)
    return(
        <article >
            <header className=" flex flex-col gap-5 mb-5">
            <Image  className="rounded-xl"
          src={post.coverImageUrl}
          width= {1200}
          height={720}
          priority
          alt={post.title}
          />
        <PostTitle url={`/post/${slug}`} as="h1">{post.title}</PostTitle>
        <p>{post.author} | {post.createdAt}
        </p>
        <p className="text-xl text-slate-700 mb-5">{post.excerpt}</p>
            </header>
            <SafeMarkdown markdown={post.content}/>
        </article>
    )
} 