import styled from 'styled-components'

export const StyledModalContainer = styled.div`
  max-width: 480px;
  width: 100%;
  padding: 16px;
  background: ${props => props.theme.palette.common.white};
  .modal-container {
    .info-container {
      display: flex;
      padding-bottom: 16px;
      .caption {
        ${props => props.theme.typography.caption};
        flex: 1;
        color: ${props => props.theme.palette.secondary.dark};
        text-transform: uppercase;
      }
      .meta-info {
        flex: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > div {
          h2,
          p {
            ${props => props.theme.typography.body2};
            color: ${props => props.theme.palette.primary.dark};
            margin: 0;
          }
          h2 {
            font-weight: bold;
            padding-bottom: 4px;
          }
        }
        button {
          ${props => props.theme.typography.button};
          text-transform: capitalize;
          border: none;
          cursor: pointer;
        }
      }
    }
    .modal-footer {
      width: 448px;
      text-align: center;
    }
  }
`
