import { findAllPublicPosts } from "@/src/lib/Posts/queries"
import PostCoverImage from "../PostCoverImage"
import PostSummary from "../PostSummary"

export default async function PostList(){
    const postList = await findAllPublicPosts()

    return(
        <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 lg:grid-cols-3  '>
            {postList.slice(1).map(post=>{
                const postLink = `/post/${post.slug}`
                return(
                <div className=" flex flex-col group" key={post.id}> 
                
                <PostCoverImage 
                    linkProps={{href:postLink}}
                    imageProps={{
                        alt:post.title,
                        src:post.coverImageUrl,
                        width:1200,
                        height:720,
                        priority:true}}
                />
                <PostSummary
                postTitle={post.title}
                postCreatedAt={post.createdAt}
                postExcerpt={post.excerpt}
                postLink={postLink}
                tag='h2'
            />
            </div>)
            })}
        </section>
    )
}