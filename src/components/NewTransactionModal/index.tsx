import Modal from 'react-modal'
import { Container } from './style'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    >
      <Container>
      <h2>Cadastrar transação</h2>

      <input placeholder="Titulo" />

      <input 
      type="number"
      placeholder="Valor" />

      <input
      placeholder="Categoria" />  

      <button type="submit">
        Cadastrar
      </button>

      </Container>
    </Modal>
  );
  
}