import clsx from "clsx";
import Link from "next/link";
import React from "react";

// Decidi criar este componente para centralizar a estrutura e os estilos dos títulos dos posts,
// evitando repetir a combinação de heading + Link + classes em vários lugares.
//
// Isso reduz duplicação, garante consistência visual entre listagem e página individual,
// e facilita manutenção futura, pois qualquer mudança no estilo ou na estrutura do título
// será feita em um único ponto.

type PostTitleProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export default function PostTitle({
  children,
  url,
  as: Tag = 'h2',
}: PostTitleProps) {

  const postTitleClassesMap={
    h1:'text-3xl/tight sm:text-3xl/tight md:text-4xl/tight lg:text-5xl/tight font-extrabold',
    h2:'text-2xl/tight font-bold'
  }
  const commonClasses = 'hover:text-slate-600 transition';

  return (
    <Tag className={clsx(postTitleClassesMap[Tag], commonClasses)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
