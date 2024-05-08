import React, { FC, memo, useState } from 'react'
import styled from 'styled-components'

import { theme } from '../../theme'

const BoxDiv = styled.div<{ color: string; selected: boolean }>`
  width: 100%;
  height: 100%;
  padding: 8px;
  background-color: ${({ selected }) => (selected ? theme.grey20 : theme.grey10)};
  border: 1px solid ${({ color }) => color};
  border-radius: 4px;
  color: ${theme.grey100};
  cursor: ${({ selected }) => (selected ? 'pointer' : 'default')}
`

const BoxLabel = styled.div`
  margin-bottom: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`

type BoxProps = {
  url?: string
  color?: string
  selected?: boolean
  label: string
  image?: string
  id: string
}

const Box: FC<BoxProps> = ({ url, color, label, image, id }: BoxProps) => {
  const [selected, setSelected] = useState(false)
  return (
    <>
      <BoxDiv
        color={color || theme.grey30}
        id={id}
        selected={selected}
        onClick={() => url && window.open(url)}
        onMouseEnter={() => url && setSelected(true)}
        onMouseLeave={() => url && setSelected(false)}
      >
        <BoxLabel>{label}</BoxLabel>
        {image && (
          <Image>
            <img alt="logo" height="80px" src={image} />
          </Image>
        )}
      </BoxDiv>
    </>
  )
}

export default memo(Box)
