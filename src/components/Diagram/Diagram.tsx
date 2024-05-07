import React from 'react'
import styled from 'styled-components'
import Xarrow from 'react-xarrows'
import { theme } from '../../theme'
import Box from '../Box'
import openid from '../../assets/openid.png'
import todobackend from '../../assets/todo-backend.png'
import react from '../../assets/react.png'

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr 0.5fr 1fr;
  grid-template-rows: 1fr;
  gap: 40px 40px;
  grid-template-areas: 'todo-react todo-backend empty authzen-proxy aserto';
`

const TodoReactSection = styled.div`
  grid-area: todo-react;
  padding: 10px;
`

const TodoBackendSection = styled.div`
  grid-area: todo-backend;
  padding: 10px;
`

const AuthZenProxySection = styled.div`
  grid-area: authzen-proxy;
  padding: 10px;
`

const AsertoSection = styled.div`
  grid-area: aserto;
  padding: 10px;
`

type DiagramProps = {
  vendor: string
  logo: string
  url: string
}

const Diagram = ({ vendor, logo, url }: DiagramProps) => {
  return (
    <Container>
      <TodoReactSection>
        <Box
          label="Todo React App"
          color={theme.indogoAccent3}
          image={react}
          url="https://todo.authzen-interop.net"
          id="todo-react"
        />
      </TodoReactSection>

      <TodoBackendSection>
        <Box
          label="Todo Backend"
          color={theme.appleAccent3}
          image={todobackend}
          id="todo-backend"
        />
      </TodoBackendSection>
      <AuthZenProxySection>
        <Box
          label="AuthZEN Proxy"
          color={theme.mojoAccent3}
          image={openid}
          id="authzen-proxy"
        />
      </AuthZenProxySection>
      <AsertoSection>
        <Box
          label={`${vendor} Authorizer`}
          color={theme.lochivarAccent3}
          image={logo}
          url={url}
          id="aserto"
        />
      </AsertoSection>
      <Xarrow start="todo-react" end="todo-backend" strokeWidth={2} />
      <Xarrow
        start="todo-backend"
        end="authzen-proxy"
        labels={{ middle: <div style={{ marginTop: '30px' }}>AuthZEN payload</div> }}
        strokeWidth={2}
      />
      <Xarrow start="authzen-proxy" end="aserto" strokeWidth={2} />
    </Container>
  )
}

export default Diagram
