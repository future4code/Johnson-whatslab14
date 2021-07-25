import React from 'react';
import styled from 'styled-components'
import Mensagem from './Components/Mensagem';
import BalaoMensagemUsuario from './Components/BalaoMensagemUsuario';
import BalaoMensagem from './Components/BalaoMensagem';

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: aliceblue;
height: 100vh;
`


const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 95%;
  border: solid;
  background-color: white;
`

const DisplayMensagens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  color: black;
  height: 95%;
  padding: 10px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

export default class App extends React.Component {
  state = {
    mensagens: []
  }

  listaMensagem = () =>
    this.state.mensagens.map((mensagem, index) => {
      if (mensagem.usuario.toLowerCase() === "eu") {
        return (<BalaoMensagemUsuario key={index} mensagem={mensagem.mensagem}  />)
      } else {
        return (<BalaoMensagem key={index} mensagem={mensagem.mensagem} usuario={mensagem.usuario}/>)
      }
    })

  updateMensagem = (newMessages) => {
    this.setState({ mensagens: newMessages })
  }
  
  
   updateBalaoMensagem = (messageBubble) => {
    this.setState({ mensagens: messageBubble })
  }


  render() {
    return (

      <Wrapper>

        <ChatBox>
          <DisplayMensagens updateState={this.updateBalaoMensagem}>
            {this.listaMensagem()}
          </DisplayMensagens>
          <Mensagem array={this.state.mensagens} updateState={this.updateMensagem} />
        </ChatBox>

      </Wrapper>

    )
  }
}
