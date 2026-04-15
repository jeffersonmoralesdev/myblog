"use client"
import ErrorMessage from "../components/ErrorMessage";

export default function NotFound() {
  
  return (
    <>
      <ErrorMessage pageTitle="Pagina não encontrada para esta" contentTitle="404 - Not Found." content="Pagina não encontrada, endereço invalido!"/>
      
    </>
  );
}
