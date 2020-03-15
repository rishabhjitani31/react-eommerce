import styled from 'styled-components'

export const StyledSizeSelect = styled.div`
  width: 100%;
  ul {
    display: flex;
    padding: 0;
    li {
      ${props => props.theme.typography.body2};
      color: ${props => props.theme.palette.primary.dark};
      border: solid 2px ${props => props.theme.palette.primary.dark};
      list-style: none;
      border-radius: 4px;
      margin-right: 8px;
      text-align: center;
      padding: 5px 12px;
      cursor: pointer;
      &.is-selected {
        border: solid 2px red;
        color: red;
      }
      &.is-disabled {
        border: 2px dashed #f0f0f0;
        color: #f0f0f0;
        cursor: not-allowed;
      }
    }
  }
`
