import styled from 'styled-components'

export const StyledInfoCard = styled.div`
  max-width: 240px;
  min-height: 136px;
  width: 100%;
  background-color: ${props =>
    props.addNew
      ? props.theme.palette.common.white
      : props.theme.palette.secondary.main};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${props => (props.addNew ? '0px' : '16px 16px 8px 16px')};
  margin: 8px;
  border-radius: 4px;
  border: ${props =>
    props.addNew ? `1px dotted ${props.theme.palette.primary.main}` : `none`};
  .add-new-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .icon-section {
      width: 32px;
      height: 32px;
      background: ${props => props.theme.palette.secondary.light};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 8px;
    }
    p {
      ${props => props.theme.typography.overline};
      color: ${props => props.theme.palette.primary.dark};
      margin: 0;
      flex: none;
      text-transform: uppercase;
      text-align: center;
    }
  }
  h4,
  p {
    color: ${props => props.theme.palette.primary.dark};
    margin: 0;
  }
  h4 {
    ${props => props.theme.typography.caption};
    margin-bottom: 8px;
  }
  p {
    ${props => props.theme.typography.body2};
    flex: auto;
  }
  .button {
    ${props => props.theme.typography.caption};
    background: none;
    border: none;
    text-align: left;
    padding-left: 0;
    padding-bottom: 0;
  }
`
