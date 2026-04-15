// Componente criado para centralizar o rodapé da aplicação,
// permitindo reutilização e mantendo consistência visual.
// Isso evita duplicação de código e facilita alterações futuras,
// já que qualquer mudança no rodapé será feita em um único lugar.

export default function Footer() {
  return (
    <footer >
      <p className="text-center py-8 ">
        <span>Copyrith &copy;</span>
        <strong>Meu Blog</strong>
        </p>
    </footer>
  );
}
