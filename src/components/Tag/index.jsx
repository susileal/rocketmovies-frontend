import { Container } from "./styles";

// ...rest - por está pegando a tag chave no Note
export function Tag({ title, ...rest}) {

  return (
    <Container {...rest}>
       {title}
    </Container>
  );
}