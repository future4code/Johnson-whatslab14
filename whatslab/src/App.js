import React from 'react';
import styled from 'styled-components'

export default class App extends React.Component {

  render() {

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
      width: 900px;
      height: 95%;
      border: solid;
      background-color: white;
      margin: 15px 0 15px 0;
    `


    return (
      <Wrapper>

        <ChatBox>

        </ChatBox>

      </Wrapper>

    )
  }
}
