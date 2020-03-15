import styled from 'styled-components'

export const StyledContainer = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }

  max-width: 1000px;
  width: 100%;
  display: flex;

  @media ${props => props.theme.breakpoints.mobileLarge} {
    flex-direction: column-reverse;
    align-items: center;
  }

  .catalog-card-image {
    margin: 0px 0px 0px -40px;
    flex: 0 0 500px;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    @media ${props => props.theme.breakpoints.mobileLarge} {
      margin: 0px 0px -40px 0px;
      flex: none;
    }
  }
  .card-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const FloatingCard = styled.div`
  flex: 1 1 auto;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: ${props => (props.reverse === true ? '3em' : '-3em')};
  background: ${props => props.floatingCardColor};
  color: ${props => (props.floatingCardColor === 'white' ? 'black' : 'white')};
  padding: 40px;
  @media ${props => props.theme.breakpoints.mobileLarge} {
    margin: 0 20px;
    padding: 40px 24px 24px 24px;
    height: auto;
  }

  .floating-card-header {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h1 {
      ${props => props.theme.typography.h1};
      color: ${props => props.theme.palette.primary.dark};
      padding: 50px 0px 10px 0px;

      @media ${props => props.theme.breakpoints.mobileLarge} {
        font-size: 2.142rem;
        padding: 0px 0px 15px 0px;
      }
    }
    p {
      ${props => props.theme.typography.caption};
      color: ${props => props.theme.palette.secondary.dark};
      text-transform: uppercase;
      padding: 0px 0px 25px 0px;
      margin: 0;

      @media ${props => props.theme.breakpoints.mobileLarge} {
        padding: 0px 0px 25px 0px;
      }
    }
  }
  .floating-card-footer {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      ${props => props.theme.typography.subtitle2};
      color: ${props =>
    props.floatingCardColor === 'white'
      ? props.theme.palette.secondary.dark
      : props.theme.palette.common.white};
      padding: 0px 0px 10px 0px;
      margin: 0px;
    }
    .button {
      margin: 0 0 16px 0;
      padding: 5px 65px;
    }
  }
`
