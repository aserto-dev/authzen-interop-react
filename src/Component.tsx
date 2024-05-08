import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import defaultlogo from './assets/logo.png'
import Diagram from './components/Diagram/Diagram'
import { Requests } from './components/Requests'
import { GlobalStyle } from './globalStyles'
import { theme } from './theme'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'header'
    'arch'
    'requests';
`

export const HeaderSection = styled.div`
  grid-area: header;
  padding-top: 10px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-size: calc(10px + 2vmin);
`

export const ArchSection = styled.div`
  grid-area: arch;
`

export const RequestsSection = styled.div`
  grid-area: requests;
`

type ComponentProps = {
  vendor?: string
  logo?: string
  url?: string
  pdpurl?: string
}

function Component({
  vendor = 'Aserto',
  logo = defaultlogo,
  url = 'https://www.aserto.com',
  pdpurl = 'https://authzen-proxy.demo.aserto.com',
}: ComponentProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div>
        <HeaderSection>
          <p>
            {vendor} implementation of &nbsp;
            <a href="https://authzen-interop.net" rel="noopener noreferrer" target="_blank">
              AuthZEN Todo Interop Scenario
            </a>
          </p>
        </HeaderSection>

        <ArchSection>
          <Diagram logo={logo} url={url} vendor={vendor} />
        </ArchSection>

        <RequestsSection>
          <hr />
          <Requests pdpurl={pdpurl} />
        </RequestsSection>
      </div>
    </ThemeProvider>
  )
}

export default Component
