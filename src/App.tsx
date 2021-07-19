import { useState } from "react";
import Modal from "react-modal"
import { TransactionsProvider } from "./hooks/useTransactions";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')
function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false)

  function handleOpenNewTransactionModal(){
    setIsNewTransactionOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal 
        onRequestClose={handleCloseNewTransactionModal} 
        isOpen={isNewTransactionOpen}/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

export default App;
