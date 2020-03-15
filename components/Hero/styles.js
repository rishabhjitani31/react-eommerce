import styled from 'styled-components'

export const StyledHeroContainer = styled.section`
  position: relative;
  img {
    max-width: 100%;
    height: auto;
  }
  .hero-banner {
    height: 500px;

    @media ${props => props.theme.breakpoints.mobileLarge} {
      height: 320px;
    }

    .hero-banner-content {
      position: absolute;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      z-index: 100;
      .sub-title {
        ${props => props.theme.typography.subtitle1}
        color: ${props => props.theme.palette.common.white};
        padding: 20px 0px 0px 0px;
        @media ${props => props.theme.breakpoints.mobileLarge} {
          font-size: 1rem;
          font-weight: 400;
        }
      }

      .h1 {
        color: ${props => props.theme.palette.common.white};
        margin: 0px;
        padding: 16px 0px 25px 0px;
        ${props => props.theme.typography.h1}

        @media ${props => props.theme.breakpoints.mobileLarge} {
          font-size: 2.14rem;
        }
      }

      .Hero-Button {
        height: 30px;
        font-size: 1rem;
        background: none;
        color: ${props => props.theme.palette.common.white};
        border-radius: 4px;
        border: solid 2px ${props => props.theme.palette.common.white};
        padding: 0px 20px;
      }

      .hero-link {
        font-size: 1rem;
        font-weight: 600;
        text-decoration: none;
        color: ${props => props.theme.palette.common.white};
        padding: 8px 0px 0px 0px;
      }
    }
    .hero-image {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    .hero-overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      background: ${props => props.theme.palette.secondary.dark};
      z-index: 0;
    }
  }
`
