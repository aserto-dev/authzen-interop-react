import React from 'react'
import Xarrow from 'react-xarrows'
import styled from 'styled-components'

import openid from '../../assets/openid.png'
import react from '../../assets/react.png'
import todobackend from '../../assets/todo-backend.png'
import { theme } from '../../theme'
import Box from '../Box'

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
          color={theme.indogoAccent3}
          id="todo-react"
          image={react}
          label="Todo React App"
          url="https://todo.authzen-interop.net"
        />
      </TodoReactSection>

      <TodoBackendSection>
        <Box
          color={theme.appleAccent3}
          id="todo-backend"
          image={todobackend}
          label="Todo Backend"
        />
      </TodoBackendSection>
      <AuthZenProxySection>
        <Box color={theme.mojoAccent3} id="authzen-proxy" image={openid} label="AuthZEN Proxy" />
      </AuthZenProxySection>
      <AsertoSection>
        <Box
          color={theme.lochivarAccent3}
          id="aserto"
          image={logo}
          label={`${vendor} Authorizer`}
          url={url}
        />
      </AsertoSection>
      <Xarrow end="todo-backend" start="todo-react" strokeWidth={2} />
      <Xarrow
        end="authzen-proxy"
        labels={{ middle: <div style={{ marginTop: '30px' }}>AuthZEN payload</div> }}
        start="todo-backend"
        strokeWidth={2}
      />
      <Xarrow end="aserto" start="authzen-proxy" strokeWidth={2} />
    </Container>
  )
}

export default Diagram
