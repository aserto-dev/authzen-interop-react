import styled from 'styled-components'
import { theme } from '../../theme'

export const PayloadTitle = styled.div`
  display: flex;
`

export const ExecuteButton = styled.button`
  background: ${theme.grey10};
  border-radius: 4px;
  border: 1px solid ${theme.lochivar90};
  margin-left: auto;
  color: ${theme.grey90};
  &:hover {
    background: ${theme.grey40};
  }
  &:active {
    box-shadow: 0 5px ${theme.grey20};
    transform: translateY(2px);
  }
`
