import { PostModel } from "@/src/model/post/posts-model";
import { postRepository } from "@/src/repositories/post";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPosts = cache(async (): Promise<PostModel[]> => {
    
    return await postRepository.findAllPublic()
    
});

export const findPostBySlugCached = cache(async(slug:string): Promise<PostModel|undefined> =>{
    
    const post = await postRepository.findPostBySlug(slug).catch(()=>undefined)
    if (!post) notFound()
    return post

})
