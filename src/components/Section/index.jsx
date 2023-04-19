import { Container } from "./styles";

/* conteúdos diferentes, ou seja, independente qual 
é o conteúdo será colocado em children - captura tudo que está dentro*/

export function Section({ title, isActive = false, children}) {

  return (
    <Container isActive={isActive}>
      <h2> {title} </h2>
      
      {children}
    </Container>
  );
}