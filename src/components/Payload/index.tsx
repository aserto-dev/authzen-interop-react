import React, { useCallback, useMemo, useState } from 'react'

import CodeEditor from '../CodeEditor'
import Response from '../Response'
import { ExecuteButton, PayloadTitle } from './styles'

const operations: Record<string, string> = {
  'GET /users/:userId': 'can_read_user',
  'GET /todos': 'can_read_todos',
  'POST /todos': 'can_create_todo',
  'PUT /todos/:id': 'can_update_todo',
  'DELETE /todos/:id': 'can_delete_todo',
}

type PayloadProps = {
  pdpurl: string
  user: string
  operation: string
  resource: string
}

const Payload = ({ pdpurl, user, operation, resource }: PayloadProps) => {
  const [response, setResponse] = useState('')
  const requestPayload = useMemo(() => {
    const action = operations[operation]
    const authZENrequest: Record<string, Record<string, unknown>> = {
      subject: {
        type: 'user',
        id: user,
      },
      action: {
        name: action,
      },
      resource: {},
      context: {},
    }
    switch (action) {
      case 'can_read_user':
        authZENrequest.resource.type = 'user'
        authZENrequest.resource.id = resource
        break
      case 'can_update_todo':
        authZENrequest.resource.type = 'todo'
        authZENrequest.resource.id = 'todo-1'
        authZENrequest.resource.properties = { ownerID: resource }
        break
      case 'can_delete_todo':
        authZENrequest.resource.type = 'todo'
        authZENrequest.resource.id = 'todo-1'
        authZENrequest.resource.properties = { ownerID: resource }
        break
    }
    return authZENrequest
  }, [user, operation, resource])

  const executeRequest = useCallback(async () => {
    try {
      const url = `${pdpurl}/access/v1/evaluation`
      const res = await fetch(url, {
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(requestPayload),
      })
      const responseObject = await res.json()
      setResponse(JSON.stringify(responseObject, null, 2))
    } catch (e) {
      setResponse('error')
    }
  }, [requestPayload, pdpurl])

  return (
    <>
      <PayloadTitle>
        <h4>
          <a
            href="https://authzen-interop.net/docs/scenarios/todo"
            rel="noopener noreferrer"
            target="_blank"
          >
            AuthZEN Payload
          </a>
        </h4>
        <ExecuteButton onClick={executeRequest}>&nbsp;Execute&nbsp;</ExecuteButton>
      </PayloadTitle>
      <CodeEditor copyToClipboard pdpurl={pdpurl} value={JSON.stringify(requestPayload, null, 2)} />
      <Response response={response} />
    </>
  )
}

export default Payload
