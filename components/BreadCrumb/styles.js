import styled from 'styled-components'

export const BreadCrumbStyle = styled.div`
  .breadcrumb-list {
    display: flex;
    margin: 0;
    padding: 0 16px;
    margin-bottom: 8px;
    flex-wrap: wrap;
    .breadcrumb-item {
      list-style: none;
      ${props => props.theme.typography.overline};
      color: ${props => props.theme.palette.secondary.dark};
      text-transform: uppercase;
      .breadcrumb-link {
        text-decoration: none;
        color: ${props => props.theme.palette.secondary.dark};
        position: relative;
        display: block;
        transition: all 0.3s ease;
        &:after {
          content: ' / ';
          margin-right: 3px;
        }
        &:hover {
          color: ${props => props.theme.palette.common.black};
        }
      }
    }
  }
`
