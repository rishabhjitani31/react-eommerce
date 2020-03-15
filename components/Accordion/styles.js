import styled from 'styled-components'

export const StyledAccordion = styled.div`
  width: 100%;
`

export const StyledPanel = styled.div`
  background-color: ${props => props.theme.palette.common.white};
  &[aria-expanded='true'] {
    .panel__label {
      .panel__arrow {
        transform: rotate(0deg);
      }
    }
  }
  .panel__label {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    padding: 9px 60px 9px 16px;
    font-weight: 500;
    font-size: 17px;
    font-family: inherit;
    transition: color 0.2s linear;
    text-transform: capitalize;
    cursor: pointer;
    @media ${props => props.theme.breakpoints.mobileLarge} {
      padding: 9px;
    }
    &:focus {
      outline: none;
    }
    .panel__arrow {
      transform: rotate(180deg);
      transition: transform 0.3s ease;
    }
  }
  .panel__inner {
    overflow: hidden;
    will-change: height;
    transition: height 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
    .panel__content {
      margin: 0;
      font-size: 14px;
      transition: opacity 0.3s linear 0.18s;
      padding: 16px;
      border-top: 1px solid ${props => props.theme.palette.secondary.light};
      border-bottom: 1px solid ${props => props.theme.palette.secondary.light};
      ${props => props.theme.typography.subtitle2};
      color: ${props => props.theme.palette.secondary.dark};
      line-height: initial;
      .accordion-description {
        margin: 0;
      }
      .accordion-list {
        margin-bottom: 0;
      }
    }
  }
  &:not(:last-child) {
    margin-bottom: 3px;
  }
`
