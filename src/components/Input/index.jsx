import { Container } from "./styles";

// a propriedade tem que ser sempre com o "I" maiúsculo, para usar a sintaxe do icon como do componente
// nem todo input tem ícone, é necessário verificar
// {Icon && <Icon/>} - só vai mostrar o ícone se de fato existir
export function Input({ icon: Icon, ...rest }) {

  return (
    <Container>
      {Icon && <Icon size={20}/>}
      <input {...rest} />
    </Container>
  );
}