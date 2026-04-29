import { PostModel } from "@/src/model/post/posts-model";
//import { PostRepository } from "./post-repository";
import { resolve } from "node:path";
import { readFile } from "node:fs/promises";

// Criei esta classe para implementar o PostRepository utilizando um arquivo JSON local
// como fonte de dados. Isso permite desenvolver e testar a aplicação sem depender
// de banco de dados ou API externa, além de manter o restante do sistema desacoplado
// da forma como os dados são armazenados.


const CAMINHO = process.cwd()
const RESOLVE_CAMINHO= resolve(CAMINHO,'src','db','seeds','post.json');
const AWAIT_TIME_RESOLVE = 0

    /*export class JsonPostRepository implements PostRepository{
        
        private async simulaiteAwaitTime(){
            if(AWAIT_TIME_RESOLVE<=0) return
            await new Promise(resolve=>setTimeout(resolve,AWAIT_TIME_RESOLVE));

        }
       private async lerPosts(){
            await this.simulaiteAwaitTime()
            let list=await readFile(RESOLVE_CAMINHO,'utf-8');
            let {posts} = JSON.parse(list)
            
            return posts
            

        }
        
        private async findAllPosts(): Promise<PostModel[]> {
            const listPosts = await this.lerPosts()
            
            if (!listPosts) throw new Error("Method not implemented.");
            return listPosts  
        }
        
        async findAllPostsPublic(): Promise<PostModel[]> {
            const listPosts = await this.findAllPosts()
            
            const listPostsPublic = listPosts.filter((posts)=> posts.published === true)
            
            return listPostsPublic
        }
        async findPostById(id: string): Promise<PostModel> {
            const listPosts = await this.findAllPosts();
            const post = listPosts.find((post)=>post.id==id)
            if (!post) throw new Error(`Post com ID ${id} não foi encontrado.`);
            return post
        }
        async findPostBySlug(slug: string): Promise<PostModel> {
            const listPost = await this.findAllPosts()
            const post = listPost.find((post)=>post.slug == slug)
            if (!post)throw new Error(`Post com SLUG ${slug} não foi encontrado.`);
            return post
        }
    }
    */
    /*
    const teste:PostRepository = new JsonPostRepository();

(async()=>{
    const response = await teste.findAllPostsPublic()
    console.log(response)

})()
 */  