import styled from 'styled-components'
import CheckboxIcon from '~/static/images/checkbox.svg'

export const CheckboxStyle = styled.div`
  .checkbox-label {
    color: ${props => props.theme.palette.secondary.dark};
    font-size: 0.87rem;
    font-weight: 500;
    display: flex;
    .custom-checkbox {
      position: relative;
      padding: 0px 9px 0px 0px;
      .checkbox {
        position: absolute;
        opacity: 0;
        height: 20px;
        width: 20px;
        cursor: pointer;
        & + .custom-checkbox-ui {
          background: #333333;
          display: block;
          height: 20px;
          width: 20px;
          border-radius: 4px;
        }
        &:checked + .custom-checkbox-ui {
          background: url(${CheckboxIcon}) 0px 0px no-repeat;
        }
      }
    }
  }
`
