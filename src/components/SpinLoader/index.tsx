import clsx from "clsx";
//Loader criado manualmente para ter controle explícito sobre quando e onde
// o indicador de carregamento será exibido, especialmente em estados gerenciados
// no client-side, como requisições via fetch, ações do usuário ou atualizações dinâmicas.
// Essa abordagem permite maior flexibilidade em comparação ao loading automático do Next.js.

type SpinLoaderProps = {
  classeName?: string;
};

export default function SpinLoader({ classeName = "" }: SpinLoaderProps) {
  const classes = clsx(
    "flex",
    "items-center",
    "justify-center",
    "p-2",
    "bg-amber-100",
    classeName,
  );
  return (
    <div className={classes}>
      <div className="border-slate-900 border-5 rounded-full w-15 h-15  border-t-transparent animate-spin"></div>
    </div>
  );
}
