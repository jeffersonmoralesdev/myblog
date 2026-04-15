// Este componente foi criado para centralizar e padronizar o layout das páginas,
// evitando repetição de classes como largura máxima, padding e cores.
// Ele funciona como um wrapper estrutural, permitindo manter consistência visual
// em todo o blog e facilitando manutenção futura.
type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen dark:bg-slate-900 dark:text-slate-100">
      {/*className="text-slate-900 bg-slate-100 min-h-screen dark:bg-slate-900 dark:text-slate-100"*/}
      <div className="max-w-screen-xl mx-auto px-8 bg-amber-100 ">
        {/*className="max-w-screen-xl mx-auto px-8 bg-amber-100 "*/}
        {children}
      </div>
    </div>
  );
}
