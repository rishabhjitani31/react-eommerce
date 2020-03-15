import styled from 'styled-components'

export const InputStyle = styled.div`
  width: 100%;
  .input-row {
    position: relative;
    .input-block {
      padding: 0px 0px 0px 10px;
      height: 50px;
      border-radius: 4px;
      border: solid 1px ${props => props.theme.palette.secondary.light};
      ${props => props.theme.typography.subtitle2};
      width: 100%;
      outline: none;
    }
    &.input-with-icon {
      .input-block {
        padding-right: 40px;
      }
    }
    .icon {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .error-message {
    ${props => props.theme.typography.caption};
    color: ${props => props.theme.palette.error.main};
  }
  &.error {
    padding: 0px 0px 16px 0px;
    .input-block {
      border-color: ${props => props.theme.palette.error.main};
    }
  }
`
