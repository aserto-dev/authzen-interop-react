import { highlight, languages } from 'prismjs'
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { CopyGlyph } from '../CopyGlyph'
import { CopyButton, StyledCodeEditor } from './styles'

function createCurl(pdpurl: string, payload: string) {
  return `curl ${pdpurl}/access/v1/evaluation \\
-X 'POST' \\
-H 'content-type: application/json' \\
-d '${payload}'`
}

const CodeEditor: React.FC<{
  hasError?: boolean
  language?: string
  readOnly?: boolean
  value: string
  onValueChange?: (value: string) => void
  copyToClipboard?: boolean
  pdpurl?: string
}> = ({
  hasError = false,
  readOnly = true,
  value,
  language,
  onValueChange = () => {},
  copyToClipboard = false,
  pdpurl = 'https://authzen-proxy.demo.aserto.com',
}) => {
  return (
    <>
      {copyToClipboard && (
        <CopyToClipboard text={createCurl(pdpurl, value)}>
          <CopyButton>
            <CopyGlyph />
            &nbsp;&nbsp;Copy as curl
          </CopyButton>
        </CopyToClipboard>
      )}
      <StyledCodeEditor
        $hasError={hasError}
        disabled={readOnly}
        highlight={(value: string) =>
          highlight(value, languages[language || 'json'], language || 'json')
        }
        ignoreTabKey={false}
        padding="10px"
        preClassName="styledpre"
        readOnly={readOnly}
        value={value || ''}
        onValueChange={onValueChange}
      />
    </>
  )
}

export default CodeEditor
