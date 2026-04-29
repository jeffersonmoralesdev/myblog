/* arquivo para alimentar o banco com os dados da seed

import { findAllPublicPosts } from "@/src/lib/Posts/queries"

import { posts } from "./schemas"
import { db } from "."


(async()=>{
    const postsSeeds = await findAllPublicPosts()
    try {
        await db.insert(posts).values(postsSeeds);
        //console.log("resolvido",)
    } catch (error) {
        console.dir(error)
    }
})()*/