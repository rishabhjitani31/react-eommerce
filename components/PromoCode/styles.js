import styled from 'styled-components'

export const StyledPromoCodeContainer = styled.div`
  display: flex;
  padding: 10px 16px;
  justify-content: space-between;
  .input-new {
    max-width: calc(100% - 88px);
    width: 100%;
    .input-row {
      .input-block {
        padding: 5px 10px;
        height: 30px;
        color: ${props => props.theme.palette.secondary.dark};
        ::-webkit-input-placeholder {
          color: ${props => props.theme.palette.secondary.dark};
        }
        :-ms-input-placeholder {
          color: ${props => props.theme.palette.secondary.dark};
        }
        ::placeholder {
          color: ${props => props.theme.palette.secondary.dark};
        }
      }
    }
  }
  .button {
    max-width: 80px;
    text-transform: capitalize;
  }
`
