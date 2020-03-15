import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 100%;
  section {
    padding: 0 0 24px 0;
    h3 {
      color: ${props => props.theme.palette.primary.dark};
      ${props => props.theme.typography.subtitle1};
    }
  }
  input {
    margin-top: 8px;
  }
  .button {
    width: 96px;
  }
`
