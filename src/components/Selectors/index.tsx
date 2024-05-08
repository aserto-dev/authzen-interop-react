import React from 'react'
import styled from 'styled-components'

import Properties from '../Properties'
import { Row } from '../Row'
import Select, { SelectOption } from '../Select'

const FieldContainer = styled.div<{
  $marginTop?: number
  $marginLeft?: number
  $marginBottom?: number
}>`
  flex: 1;
  margin-top: ${({ $marginTop }) => `${$marginTop}px`};
  margin-left: ${({ $marginLeft }) => `${$marginLeft}px`};
  margin-bottom: ${({ $marginBottom = 20 }) => `${$marginBottom}px`};
`

const SelectorContainer = styled.div`
  padding-left: 20px;
  max-width: 400px;
  display: block;
`

export const operationOptions: Array<SelectOption> = [
  {
    label: 'GET /users/:userId',
    value: 'GET-user',
  },
  {
    label: 'GET /todos',
    value: 'GET-todo',
  },
  {
    label: 'POST /todos',
    value: 'POST',
  },
  {
    label: 'PUT /todos/:id',
    value: 'PUT',
  },
  {
    label: 'DELETE /todos/:id',
    value: 'DELETE',
  },
]

export const userOptions: Array<SelectOption> = [
  {
    label: 'rick@the-citadel.com',
    value: 'rick@the-citadel.com',
  },
  {
    label: 'morty@the-citadel.com',
    value: 'morty@the-citadel.com',
  },
  {
    label: 'beth@the-smiths.com',
    value: 'beth@the-smiths.com',
  },
  {
    label: 'summer@the-smiths.com',
    value: 'summer@the-smiths.com',
  },
  {
    label: 'jerry@the-smiths.com',
    value: 'jerry@the-smiths.com',
  },
]

type SelectorsProps = {
  user: SelectOption
  setUser: React.Dispatch<React.SetStateAction<SelectOption>>
  operation: SelectOption
  setOperation: React.Dispatch<React.SetStateAction<SelectOption>>
  resource: SelectOption
  setResource: React.Dispatch<React.SetStateAction<SelectOption>>
}

export const Selectors = ({
  user,
  setUser,
  operation,
  setOperation,
  resource,
  setResource,
}: SelectorsProps) => {
  const showResourceSelect = operation?.label?.includes(':') ? true : false
  const resourceSelectLabel = operation?.label?.includes('GET') ? 'User' : 'Todo Owner'

  return (
    <SelectorContainer>
      <h4>Requests</h4>
      <Row $centered>
        <FieldContainer>
          <Select
            label="User"
            options={userOptions}
            value={user}
            onChange={(option) => {
              setUser(option!)
            }}
          />
        </FieldContainer>
      </Row>
      <Properties user={user.label} />
      <Row $centered>
        <FieldContainer>
          <Select
            label="Operation"
            options={operationOptions}
            value={operation}
            onChange={(option) => {
              setOperation(option!)
            }}
          />
        </FieldContainer>
      </Row>
      {showResourceSelect && (
        <FieldContainer>
          <Select
            label={resourceSelectLabel}
            options={userOptions}
            value={resource}
            onChange={(option) => {
              setResource(option!)
            }}
          />
        </FieldContainer>
      )}
    </SelectorContainer>
  )
}
