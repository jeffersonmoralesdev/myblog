import { db } from "@/src/db/drizzle";
import { posts } from "@/src/db/drizzle/schemas";
import { PostModel } from "@/src/model/post/posts-model";
import { postRepository } from "@/src/repositories/post";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPosts = cache(async (): Promise<PostModel[]> => {
    
    return await postRepository.findAllPostsPublic()
    
});

export const findPostBySlugCached = cache(async(slug:string): Promise<PostModel> =>{
    
    const post = await postRepository.findPostBySlug(slug)
    if (!post) notFound()
    return post

})


