import { FiPlus, FiX } from "react-icons/fi"

import { Container } from "./styles";

// isNew - para saber se é para adicionar um novo item
// isNew={isNew} - vai ser usado dentro do Container no styles
// readOnly - somente leitura, para um item que já foi adicionado, não será possível editar
// readOnly={!isNew} se não é novo pode bloquear
// {isNew ? <FiPlus/> : <FiX/>} se for novo aparece o ícone de renderizar se não o de fechar

export function NoteItem({ isNew, value, onClick, ...rest }) {

  return (
    <Container isNew={isNew}>

      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest} 
      />

      <button
        type="button"
        onClick={onClick}
        className={ isNew ? 'button-add' : 'button-delete'}

      > 
        {isNew ? <FiPlus/> : <FiX/>}
      </button>

    </Container>
  );
}