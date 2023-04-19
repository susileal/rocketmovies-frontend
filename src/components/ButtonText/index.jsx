import { Container } from "./styles";

// isActive - esta propriedade vai deixar ativa ou não o link
// isActive = false - se nã passar o valor isActive no botão ele irá considerar falso

export function ButtonText({ title, ...rest}) {

  return (
    <Container 
      type="button"
      {...rest}
    >
       {title}
    </Container>
  );
}