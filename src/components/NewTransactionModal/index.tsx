import * as Dialog from "@radix-ui/react-dialog";

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionModal(){
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>  

        <CloseButton>
            <X size={24} />
        </CloseButton>
        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant="income">
              <ArrowCircleUp size={20} />
              Entrada
            </TransactionTypeButton>
            
            <TransactionTypeButton variant="outcome">
              <ArrowCircleDown size={20} />
              Saída
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit">
            Cadastrar
          </button>
        </form>

      </Content>
    </Dialog.Portal>
  )
}