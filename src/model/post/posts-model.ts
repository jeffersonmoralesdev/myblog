
// Criei este modelo para centralizar e padronizar a estrutura de dados de uma postagem no sistema.
// Isso garante consistência entre diferentes partes da aplicação (componentes, páginas e requisições),
// reduz erros de tipagem e facilita manutenção caso a estrutura do post precise evoluir no futuro.
export type PostModel = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImageUrl: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
    author: string;
};
