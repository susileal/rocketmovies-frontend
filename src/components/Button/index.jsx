import { Container } from './styles'

// props recupera a propriedade do componente
// é necessário colocar entre {} para exibir o conteúdo de uma propriedade
// desestruturar o props - {title}
// qualquer outra propriedade não explícita estará no ...rest
// se não passar o loading para ninguém será definido um valor padrão como false
export function Button({title, loading = false, isActive = false, ...rest}){

  return(
  <Container 
    type="button"
    disabled={loading}
    {...rest}
    isActive={isActive}
    >
      {loading ? 'Carregando...' : title}
  </Container>

  )
}