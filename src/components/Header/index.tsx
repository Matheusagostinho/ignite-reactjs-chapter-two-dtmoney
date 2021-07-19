import { Container, Content } from "./styles";

import logoIMG from "../../assets/logo.svg"

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({onOpenNewTransactionModal}: HeaderProps){


  return(
    <Container>
      <Content>
      <img src={logoIMG} alt="Ignite Money"/>
      <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
      </Content>
     
    </Container>
  )
}