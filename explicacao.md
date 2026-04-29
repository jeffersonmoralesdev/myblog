``` 
SSR -> Server Side Rendering o que é renderizado no lado servidor
CSR -> Client Side Rendering o que é renderizado no lado cliente

ROTAS
Static / SSG -> pagina estatica *Tenho HTML pronto* *se tem html pronto não busca nada no banco de dados não verifica login ou seja realmente estatic*

Dynamic -> pagina dinamica *Quando não tem nada pronto next precisa consultar dados do banco para montar pagina e montar cada parte em seu lugar SSR/CSR*

ISR -> Incremental Static Regeneration * é a combinação de Static e Dynamic onde vc tem o html pronto porem vf pode configurar um tem exemplo a cada 60s buscar os dados no servidor e atualizar o html para o proximo usuário*

ISR -> *outra forma de utilizar tambem é quando se tem o html pronto porem quando vc altera alguma coisa ele atualiza e proximo clinete ja ve atualizado*

/ (Pública)
/post[slug] (Pública)

/admin/post (Privado - Dynamic) - Ler (R) Lista de Posts / (D) Deletar Post
/admin/post/[id] (Privado - Dynamic) - Atualizar um post (U)
/admin/post/[new] (Privado - Dynamic) - Criar um post (C)

/admin/login (Dynamic) - Fazer o login do usuário
```