import { postRepository } from "@/src/repositories/post";
import PostSummary from "../PostSummary";
import PostCoverImage from "../PostCoverImage";
import { findAllPublicPosts } from "@/src/lib/Posts/queries";

export default async function PostFeatured() {
    const posts = await findAllPublicPosts();
    const post = posts[0]
    const slug = post.slug;
    const postlink =`/post/${slug}`

  return (
    <div className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group ">
         <PostCoverImage
        linkProps={{ href: postlink }}
        imageProps={{
          src: post.coverImageUrl,
          width: 1200,
          height: 720,
          priority: true,
          alt: post.title,
        }}
      />
        <PostSummary
          
            postTitle={post.title}
            postCreatedAt={post.createdAt}
            postExcerpt={post.excerpt}
            postLink={postlink}
            tag="h1"
            />
    </div>
  )
}
