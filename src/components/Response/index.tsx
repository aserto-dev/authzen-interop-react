import React from 'react'
import styled from 'styled-components'

import { theme } from '../../theme'
import CodeEditor from '../CodeEditor'

const Label = styled.div`
  margin-top: 3px;
  font-size: 16px;
  color: ${theme.grey90};
  font-weight: 600;
  margin-bottom: 4px;
`

const Response = ({ response }: { response: string }) => {
  return (
    <>
      <Label>Response</Label>
      <CodeEditor value={response} />
    </>
  )
}

export default Response
