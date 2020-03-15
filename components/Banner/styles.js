import styled from 'styled-components'

export const StyledBanner = styled.div`
  text-align: center;
  img {
    width: 100%;
    object-fit: cover;
    height: auto;
  }
`
export const StyledVideoBanner = styled.div`
  .container {
    width: 100%;
    height: 100vh;
    position: relative;
    .player {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
`
