import styled from 'styled-components'

export const StyledColorSelect = styled.div`
  width: 100%;
  ul {
    display: flex;
    padding: 0;
  }
`

export const ColorList = styled.li`
  width: 24px;
  height: 24px;
  list-style: none;
  background: ${props => props.color};
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
  &.is-selected {
    border: 1px solid #48bcab;
  }
`
