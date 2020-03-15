import styled from 'styled-components'

export const StyledSubscribe = styled.div`
  width: 100%;
  height: 333px;
  background-color: ${props => props.theme.palette.secondary.main};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > span.envelope-container {
    width: 56px;
    height: 56px;
    background-color: ${props => props.theme.palette.primary.main};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  > span.envelope-container > img {
    width: 24px;
    height: 18.3px;
    object-fit: contain;
  }
  > h4.title,
  > p.meta-title {
    text-align: center;
    color: ${props => props.theme.palette.secondary.dark};
    margin: 0;
  }
  > h4.title {
    ${props => props.theme.typography.h4};
    padding-top: 24px;
    padding-bottom: 15px;
    text-transform: uppercase;
  }
  > p.meta-title {
    padding-bottom: 20px;
  }
  > div.content {
    width: 100%;
    max-width: 500px;
    /* margin: 10px 0; */
    display: flex;
    align-items: center;
  }
  > div.content > .input {
    flex: 1;
    background-color: white;
  }
  > div.content > .input > div {
    width: auto;
    border-radius: 0;
    padding: 0 8px;
  }
  > div.content > .button-container {
    flex: 0.25;
  }
  div.error_message {
    padding: 5px;
    margin-top: 0;
  }
  > div.content > .input > div > .button-container > .button {
    min-width: 80px;
    margin-left: 20px;
    color: ${props => props.theme.palette.common.white};
    background-color: ${props => props.theme.palette.primary.main};
    height: 30px;
    border-radius: 4px;
    text-transform: capitalize;
    ${props => props.theme.typography.body2};
  }
`
