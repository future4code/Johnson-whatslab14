import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components'


const InputBox = styled.div`
    display: flex;
    margin-bottom: 0;
    height: 4%;
    margin-top:auto;
    padding:5px ;
    border-radius: 10px;
    width: 100%;
    align-items: center;
    justify-content: start;
`
const Botao = styled.button`
width: 25%;
`
const InputMsg = styled.input`
width: 35%;
`
class Mensagem extends React.Component {

    state = {
        mensagens:this.props.array,
        inputUsuario: '',
        inputMensagem: '',
    } 


    onChangeUsuario = (event) => {
        this.setState({ inputUsuario: event.target.value })
    }

    onChangeMensagem = (event) => {
        this.setState({ inputMensagem: event.target.value })
    }

    enviaMensagem=() => {
        const novoArray = this.state.mensagens
        novoArray.push(
            {usuario:this.state.inputUsuario, mensagem:this.state.inputMensagem}
        )
        this.setState({
            mensagens:novoArray,
            inputMensagem:''
        })
        this.props.updateState(this.state.mensagens)


    }
        render() {
            return (
                <InputBox>
                    <InputMsg placeholder='Usuário' value={this.state.inputUsuario} onChange={this.onChangeUsuario} />
                    <InputMsg placeholder='Escreva sua Mensagem' value={this.state.inputMensagem} onChange={this.onChangeMensagem }/>
                    <Botao onClick={this.enviaMensagem}>Enviar</Botao>
                </InputBox>
            )
        }
    }


export default Mensagem
