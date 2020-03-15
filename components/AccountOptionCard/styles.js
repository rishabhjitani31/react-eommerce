import styled from 'styled-components'

export const StyledAccountCard = styled.div`
  background-color: ${props => props.theme.palette.secondary.main};
  max-width: 296px;
  min-height: 96px;
  width: 100%;
  display: flex;
  padding: 16px;
  margin: 4px;
  .icon-section {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 6px 6px 6px;
  }
  .option-section {
    padding: 0 8px;
    h4,
    p {
      ${props => props.theme.typography.body2};
      color: ${props => props.theme.palette.primary.dark};
      margin: 0;
    }
    h4 {
      font-weight: 600;
    }
    p {
      letter-spacing: normal;
    }
  }
`
