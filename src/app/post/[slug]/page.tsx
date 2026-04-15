import SpinLoader from "@/src/components/SpinLoader"
import { findPostBySlugCached } from "@/src/lib/Posts/queries"
import { Suspense } from "react"

import { Metadata } from "next"
import SinglePost from "@/src/components/SinglePost"

type PostSlugPageProps={
    params:Promise<{slug:string}>
}

export async function generateMetaData({params}:PostSlugPageProps):Promise<Metadata>{
    const {slug}= await params
    const post=await findPostBySlugCached(slug)
    return{
        title:post.title,
        description:post.excerpt
  }
}

export default async function PostSlugPage({params}:PostSlugPageProps){
    const {slug}= await params
    console.log("onde sera exibido esta mensagem")
    return(
        <Suspense fallback={<SpinLoader classeName="min-h-[320px]"/>}>

            <SinglePost slug={slug}/>
        </Suspense>
    )

}