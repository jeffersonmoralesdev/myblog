import { PostFromDbMysql, PostModel } from "@/src/model/post/posts-model";

import { PostRepository } from "./post-repository";
import { db } from "@/src/db/drizzle";
import { posts } from "@/src/db/drizzle/schemas";
import { desc, eq, sql } from "drizzle-orm";


export class DrizzlePostRepository implements PostRepository{
    
    private tranformPublishedTinyIntInBoolean(post:PostFromDbMysql[]):PostModel[]{
               
        return post.map( (p) =>({
            ...p,
            published:!!p.published
        }));
        
    }

    async findAllPosts():Promise<PostModel[]>{
        const listPosts:PostFromDbMysql[] = await db.query.posts.findMany({
            orderBy:(posts,{desc}) => desc(posts.createdAt)
        })

        if (!listPosts)throw new Error("Method not implemented.");
        
        const postsPublishedConverted = this.tranformPublishedTinyIntInBoolean(listPosts) 
    
        return postsPublishedConverted
    }
    
    async findAllPostsPublic(): Promise<PostModel[]> {
        const listAllPosts:PostFromDbMysql[] = await db.select().from(posts).where(eq(posts.published,1)).orderBy(posts.createdAt)
        const postsPublishedConverted = this.tranformPublishedTinyIntInBoolean(listAllPosts) 
        if (!postsPublishedConverted)throw new Error("Method not implemented.");
        return postsPublishedConverted 
    
    }
    async findPostById(id: string): Promise<PostModel> {
        const postId :PostFromDbMysql | undefined = await db.query.posts.findFirst({
            where:(posts,{eq}) => eq(posts.id,id),
        })
        
        if (!postId)throw new Error("ID Invalido, verifique os dados e tente novamente.");

        return {...postId, published:!!postId.published}
    }
    async findPostBySlug(slug: string): Promise<PostModel> {
        const postSlug :PostFromDbMysql | undefined = await db.query.posts.findFirst({
            where:(posts,{eq,and}) => and(eq(posts.published, 1), eq(posts.slug, slug))
        })
        if(!postSlug) throw new Error("SLUG invalido, verifique os dados e tente novamente.");

        return { ...postSlug , published:!!postSlug.published}
    }
    
}


const drizzleClasse = new DrizzlePostRepository();

