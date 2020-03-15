import styled from 'styled-components'

export const StyledSignIn = styled.div`
  margin: 0px;
  padding: 16px;
  .signin-component {
    .signin-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 0px 26px 0px;
      .signin-heading-content {
        ${props => props.theme.typography.subtitle2};
      }
    }
    .signin-content {
      .form-row {
        padding: 0px 0px 8px 0px;
      }
      .signin-action-row {
        display: flex;
        justify-content: space-between;
        padding: 0px 0px 40px 0px;
        .forgot-password {
          color: ${props => props.theme.palette.secondary.dark};
          ${props => props.theme.typography.subtitle2};
          font-weight: 500;
          text-decoration: none;
        }
      }
      .signin-terms-content {
        ${props => props.theme.typography.subtitle2};
        color: ${props => props.theme.palette.secondary.dark};
        text-align: center;
        padding: 0px 0px 24px 0px;
        .privacy-policy {
          color: ${props => props.theme.palette.secondary.dark};
          text-decoration: underline;
        }
      }
      .create-account-link {
        text-align: center;
        padding: 20px 0px 0px 0px;
        .create-acc-link {
          ${props => props.theme.typography.subtitle2};
          color: ${props => props.theme.palette.primary.dark};
        }
      }
    }
  }
`
