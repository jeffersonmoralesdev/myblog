import { PostModel } from "@/src/model/post/posts-model";
// Criei esta interface para abstrair o acesso aos dados de posts,
// desacoplando a aplicação da fonte de dados concreta (API, banco, arquivo, etc).
// Isso permite alterar a forma de obtenção dos posts sem impactar o restante do sistema,
// além de facilitar testes e manutenção.

export interface PostRepository{
    findAllPublic():Promise<PostModel[]>;
    findPostById(id:string):Promise<PostModel>;
    findPostBySlug(slug:string):Promise<PostModel>;
}

