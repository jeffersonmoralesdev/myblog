"use client"

import ErrorMessage from "@/src/components/ErrorMessage"
import { useEffect } from "react"
type RootErrorPageProps={
    error:Error;
    reset:()=>void;
}
export default function RootErrorPage({error,reset}:RootErrorPageProps){
    useEffect(()=>{
        console.log(error)
    },[error])
    return(<ErrorMessage pageTitle="Page Error" contentTitle="error-501" content={<button onClick={()=>reset()}>Clique para tentar novamente</button>}/>
)}