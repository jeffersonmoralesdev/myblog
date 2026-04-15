import { JsonPostRepository } from "./json-post-repository";
import { PostRepository } from "./post-repository";
// Criei esta instância para centralizar a definição da implementação concreta do PostRepository.
// Isso permite que o restante da aplicação dependa apenas da abstração (PostRepository),
// facilitando a substituição futura por outra fonte de dados (API, banco, etc)
// sem precisar alterar os pontos que utilizam o repositório.

export const postRepository:PostRepository = new JsonPostRepository(); 
