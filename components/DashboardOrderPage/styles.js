import styled from 'styled-components'

export const DashboardOrderPageStyle = styled.div`
  background: ${props => props.theme.palette.common.white};
  padding: 24px 16px;
  .title {
    ${props => props.theme.typography.subtitle1};
    color: ${props => props.theme.palette.primary.dark};
    margin-bottom: 24px;
  }
`
