import React from 'react';
import styled from 'styled-components'
import Mensagem from './Components/Mensagem';

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

const CaixaMensagens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  color: black;
  height: 95%;
  padding: 10px;
`
const BalaoMensagem = styled.div`
 padding: 0.9em 0.8em;
 border-radius: 0.5em;
 font-weight: 450;
 line-height: 1.3;
 box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
 max-width: 60%;
 min-width: 8%;
 margin-bottom: 1em;
 word-wrap: break-word;
`
const BalaoMensagemEu = styled.div`
 padding: 0.9em 0.8em;
 border-radius: 0.5em;
 font-weight: 450;
 line-height: 1.3;
 box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
 max-width: 60%;
 min-width: 8%;
 margin-bottom: 1em;
 word-wrap: break-word;
 background-color: greenyellow;
`

const ContainerNome = styled.div`
 color: darkgreen;
 font-size: 0.8em;
 font-weight: 600;
 margin-bottom: 0.2em;
`

export default class App extends React.Component {
  state = {
    mensagens: [
     
    ]
  }

  listaMensagem = () => 
    this.state.mensagens.map((mensagem,index) => {
      if(mensagem.usuario === "eu"){
        return (<BalaoMensagemEu key={index}><div>{mensagem.mensagem}</div></BalaoMensagemEu>)
      }else{
      return (<BalaoMensagem key={index}><ContainerNome>{mensagem.usuario}</ContainerNome><div>{mensagem.mensagem}</div></BalaoMensagem>)
    }})
    
    handleUpdate = (newMessages) => {
      this.setState({mensagens:newMessages})
    }

  render() {
    return (

      <Wrapper>

        <ChatBox>
          <CaixaMensagens>
            {this.listaMensagem()}
          </CaixaMensagens>
          <Mensagem array={this.state.mensagens}   updateState={this.handleUpdate}/>
        </ChatBox>

      </Wrapper>

    )
  }
}
