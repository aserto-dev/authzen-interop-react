import React from 'react'
import { highlight, languages } from 'prismjs'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { CopyButton, StyledCodeEditor } from './styles'
import { CopyGlyph } from '../CopyGlyph'

function createCurl(payload: string) {
  return `curl https://authzen-proxy.demo.aserto.com/access/v1/evaluation \\
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
}> = ({
  hasError = false,
  readOnly = true,
  value,
  language,
  onValueChange = () => {},
  copyToClipboard = false,
}) => {
  return (
    <>
      {copyToClipboard && (
        <CopyToClipboard text={createCurl(value)}>
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
