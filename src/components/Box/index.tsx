import React, { FC, memo, useState } from 'react'
import styled from 'styled-components'

import { theme } from '../../theme'

const BoxDiv = styled.div<{ color: string; selected: boolean }>`
  width: 100%;
  height: 100%;
  padding: 8px;
  background-color: ${({ selected }) => selected ? theme.grey20 : theme.grey10};
  border: 1px solid ${({ color }) => color};
  border-radius: 4px;
  color: ${theme.grey100};
  .react-flow__handle {
    border: 1px solid ${theme.grey30};
    border: 1px solid ${({ color }) => color};
    background: ${theme.grey30};
    width: 1px;
    height: 14px;
    border-radius: 1px;
  }
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
        id={id}
        onClick={() => url && window.open(url)}
        onMouseEnter={() => url && setSelected(true)}
        onMouseLeave={() => url && setSelected(false)}
        color={color || theme.grey30}
        selected={selected}
      >
        <BoxLabel>{label}</BoxLabel>
        {image && (
          <Image>
            <img src={image} height="80px" alt="logo" />
          </Image>
        )}
      </BoxDiv>
    </>
  )
}

export default memo(Box)
