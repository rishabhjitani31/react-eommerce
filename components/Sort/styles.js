import styled from 'styled-components'

export const SortStyle = styled.div`
  .sorting-header {
    padding: 0 12px;
    @media ${props => props.theme.breakpoints.mobileLarge} {
      display: none;
    }
    .sorting-header-container {
      display: flex;
      align-items: center;
      border-bottom: 1px solid ${props => props.theme.palette.border.main};
      padding: 0 4px;
      .title {
        ${props => props.theme.typography.overline};
        color: ${props => props.theme.palette.secondary.dark};
        margin-right: 6px;
        text-transform: uppercase;
      }
      .sorting-method {
        padding: 12px 8px;
        ${props => props.theme.typography.caption};
        color: ${props => props.theme.palette.secondary.dark};
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        transition: all 0.3s ease;
        margin-right: 14px;
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: block;
          margin: 0 auto;
          background: ${props => props.theme.palette.secondary.light};
          width: 0;
          transition: all 0.3s ease;
          height: 1px;
        }
        &:hover {
          color: ${props => props.theme.palette.common.black};
          &:after {
            width: 100%;
            background: ${props => props.theme.palette.common.black};
          }
        }
        &.active {
          color: ${props => props.theme.palette.common.black};
          &:after {
            width: 100%;
            background: ${props => props.theme.palette.common.black};
          }
        }
      }
    }
  }
`
