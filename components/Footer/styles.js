import styled from 'styled-components'
export const Buffer = styled.div`
  flex: 1;
`
export const Footer = styled.footer`
  width: 100%;
  background: ${props => props.theme.palette.common.white};
  text-align: center;
  padding-top: 40px;
  .footer-content,
  .footer-bottom {
    margin-top: 40px;
  }
`
export const Icon = styled.img`
  display: block;
`
export const FooterHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 0 15px;
  }
`
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  position: relative;
  flex-wrap: wrap;
  @media ${props => props.theme.breakpoints.mobileLarge} {
    max-width: 200px;
  }
  .link-block {
    max-width: 200px;
    width: 100%;
    margin: 0;
    padding: 0;
    margin-right: 60px;
    @media ${props => props.theme.breakpoints.mobileLarge} {
      max-width: 100%;
      padding-bottom: 12px;
      margin: 0;
    }
    li {
      list-style: none;
      text-align: left;
      padding-bottom: 12px;
      a {
        ${props => props.theme.typography.caption};
        color: ${props => props.theme.palette.secondary.dark};
        text-decoration: none;
        text-transform: uppercase;
        display: block;
      }
      &:last-child {
        padding-bottom: 0;
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
`
export const FooterBottom = styled.div`
  margin-top: 40px;
  background-color: ${props => props.theme.palette.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.palette.common.white};
  padding: 18px 0;
  position: relative;
  flex-wrap: wrap;
  .footer-link {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      list-style: none;
      a {
        ${props => props.theme.typography.overline};
        color: ${props => props.theme.palette.common.white};
        line-height: initial;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        margin: 0 5px;
        &:after {
          position: absolute;
          content: '|';
          color: ${props => props.theme.palette.common.white};
          top: 0px;
          right: -8px;
        }
      }
      &:last-child {
        a {
          &:after {
            display: none;
          }
        }
      }
    }
  }
  .copyright-txt {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    @media ${props => props.theme.breakpoints.mobileLarge} {
      position: static;
      transform: initial;
      width: 100%;
      margin-top: 10px;
    }
    p {
      ${props => props.theme.typography.overline};
      font-style: italic;
      margin: 0;
    }
  }
`
