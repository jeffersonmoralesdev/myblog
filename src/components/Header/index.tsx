// Componente criado para centralizar o header da aplicação,
// permitindo reutilização e mantendo consistência visual.
// Isso evita duplicação de código e facilita alterações futuras,
// já que qualquer mudança no Cabeçalho será feita em um único lugar.

export default function Header() {
  return (
    <div>
      <header
        className="   text-4xl/normal font-extrabold py-8 
                        sm:text-5xl/normal sm:py-10
                        md:text-6xl/normal md:py-11
                        lg:text-7xl/normal lg:py-12
                        "
      >
        Meu Blog
      </header>
    </div>
  );
}
