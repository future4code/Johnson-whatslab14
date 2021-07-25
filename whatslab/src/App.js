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
  justify-content: center;
  align-items: center;
  color: black;
  height: 95%;
`

export default class App extends React.Component {
  state = {
    mensagens: [
     
    ],
  }

  listaMensagem = () => 
    this.state.mensagens.map((mensagem,index) => {
      return (
          <div key={index}>
            <p>{mensagem.usuario}: {mensagem.mensagem}</p>
          </div>
        )
    })
    
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
