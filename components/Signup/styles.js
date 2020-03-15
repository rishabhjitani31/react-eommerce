import styled from 'styled-components'

export const StyledSignupContainer = styled.div`
  width: 100%;
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .input-row {
      width: 100%;
      &.two-input {
        display: flex;
        justify-content: space-evenly;
        .input-new {
          width: 50%;
          &:last-child {
            margin-left: 16px;
          }
        }
      }
      .input-new {
        padding-bottom: 8px;
      }
    }
  }
`
