import React, { useState } from 'react'
import styled from 'styled-components'
import { Selectors, userOptions, operationOptions } from '../Selectors'
import Module from '../Module'
import Payload from '../Payload'
import { theme } from '../../theme'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 40px 40px;
  grid-template-areas: 'selectors payload module';
`

export const SelectorsSection = styled.div`
  grid-area: selectors;
  padding: 10px;
  border-right: 1px solid ${theme.grey20};
`

export const PayloadSection = styled.div`
  grid-area: payload;
  padding: 10px;  
`

export const ModuleSection = styled.div`
  grid-area: module;
  padding: 10px;
  padding-left: 40px;
  border-left: 1px solid ${theme.grey20};
`

export const Requests = ({ pdpurl} : { pdpurl: string }) => {
  const [user, setUser] = useState(userOptions[0])
  const [operation, setOperation] = useState(operationOptions[0])
  const [resource, setResource] = useState(userOptions[0])

  return (
    <Container>
      <SelectorsSection>
        <Selectors
          user={user}
          setUser={setUser}
          operation={operation}
          setOperation={setOperation}
          resource={resource}
          setResource={setResource}
        />
      </SelectorsSection>

      <PayloadSection>
        <Payload pdpurl={pdpurl} user={user.label} operation={operation.label} resource={resource.label} />
      </PayloadSection>

      <ModuleSection>
        <h4>Authorizer Module</h4>
        <Module module={operation?.label} />
      </ModuleSection>
    </Container>
  )
}
