import styled from 'styled-components'

export const StyledContainer = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }

  max-width: 495px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .catalog-card-image {
    margin: 0px 0px 0px 0px;
    flex: 0 0 500px;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    @media ${props => props.theme.breakpoints.mobileLarge} {
      height: 320px;
      flex: 0 0 320px;
    }
  }
  .card-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .catalog-card-btn-row {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 0px 0px 0px;
    @media ${props => props.theme.breakpoints.mobileLarge} {
      flex-direction: column;
    }
    .button {
      margin: 0px 10px;
      @media ${props => props.theme.breakpoints.mobileLarge} {
        margin-bottom: 10px;
        width: 200px;
      }
    }
  }
`

export const FloatingCard = styled.div`
  flex: 0 0 320px;
  height: 156px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: ${props => (props.reverse === true ? '3em' : '-3em')};
  background: ${props => props.floatingCardColor};
  color: ${props =>
    props.floatingCardColor === 'white'
      ? props.theme.palette.primary.dark
      : props.theme.palette.common.white};
  padding: 40px;
  margin: -126px 0px 0px 0px;
  @media ${props => props.theme.breakpoints.mobileLarge} {
    padding: 40px 24px 24px 24px;
    margin: -40px 16px 0px 16px;
    width: auto;
    flex: 1 1 auto;
  }

  .floating-card-header {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h3 {
      ${props => props.theme.typography.h3};
      margin: 0px;
      padding: 0px 0px 15px 0px;

      @media ${props => props.theme.breakpoints.mobileLarge} {
        padding: 0px 0px 15px 0px;
      }
    }
    p {
      ${props => props.theme.typography.body2};
      margin: 0px;
      @media ${props => props.theme.breakpoints.mobileLarge} {
        padding: 0px 0px 25px 0px;
      }
    }
  }
`
