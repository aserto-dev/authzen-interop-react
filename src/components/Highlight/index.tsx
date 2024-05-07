import React, { useMemo } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { CopyGlyph } from '../CopyGlyph'
import { CodeContainer, CodeDiv, CopyButton, customAtomDark } from './styles'

type HighlightProps = {
  children: string
  language: string
  copyToClipboard?: boolean
  height?: number
  fontSize?: string
}

const Highlight: React.FC<HighlightProps> = ({ children, language, copyToClipboard, height, fontSize = '14px' }) => {
  const memoizedHighlighter = useMemo(
    () => (
      <SyntaxHighlighter
        language={language}
        lineProps={{ style: { whiteSpace: 'break-spaces' } }}
        style={{...customAtomDark, 'pre[class*="language-"]': {
          background: 'inherit',
          fontFamily: '"Fira Code", monospace',
          fontSize,
          fontWeight: '500',
        }}}
        wrapLines={true}
      >
        {children}
      </SyntaxHighlighter>
    ),
    [children, language, fontSize]
  )
  return (
    <CodeContainer $copyToClipboard={copyToClipboard}>
      <CodeDiv $height={height}>{memoizedHighlighter}</CodeDiv>
      {copyToClipboard && (
        <CopyToClipboard text={children}>
          <CopyButton>
            <CopyGlyph />
          </CopyButton>
        </CopyToClipboard>
      )}
    </CodeContainer>
  )
}

export default Highlight
